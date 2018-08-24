<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

use BrandEmbassy\Components\Forms\Table\Model\InconsistentDataException;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Forms\Table\Model\CellData;
use BrandEmbassy\Components\Forms\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\Forms\Table\Model\DataProvider;
use BrandEmbassy\Components\Forms\Table\Model\RowData;
use BrandEmbassy\Components\Forms\Table\Model\TableDefinition;

final class Table implements UiComponent
{

    /**
     * @var TableDefinition
     */
    private $tableDefinition;

    /**
     * @var DataProvider
     */
    private $dataProvider;

    /**
     * @var (callable(CellData $cellData, RowData $rowData): Cell)[]
     */
    private $cellRenderCallbacks;

    /**
     * @var string[]
     */
    private $columnsNotInDataSet;

    public function __construct(TableDefinition $tableDefinition, DataProvider $dataProvider)
    {
        $this->tableDefinition = $tableDefinition;
        $this->dataProvider = $dataProvider;
    }

    /**
     * @param string $column
     * @param callable(CellData $cellData, RowData $rowData): Cell $function
     */
    public function setCellRenderCallback(string $column, callable $function): void
    {
        $this->cellRenderCallbacks[$column] = $function;
    }

    public function render(): string
    {
        $result = '<div class="Table__Table" data-reactroot=""><table>';
        $result .= $this->renderHead();
        $result .= $this->renderBody();
        $result .= '</table></div>';

        return $result;
    }

    private function renderHead(): string
    {
        $headerCells = array_map(
            function (ColumnDefinition $columnDefinition): HeaderCell {
                return new HeaderCell($columnDefinition->getHeaderLabel());
            },
            $this->tableDefinition->getColumnDefinitions()
        );

        return '<thead>' . (new HeaderRow($headerCells))->render() . '</thead>';
    }

    private function renderBody(): string
    {
        $result = '<tbody>';
        foreach ($this->dataProvider->getIterator() as $rowData) {
            \assert($rowData instanceof RowData);
            $cellsData = $rowData->getCellsData();

            /** @var Cell[] $cells */
            $cells = [];
            foreach ($this->tableDefinition->getColumnDefinitions() as $columnDefinition) {
                $columnKey = $columnDefinition->getKey();
                $renderFunction = $this->getCellRenderFunction($columnDefinition->getKey());

                if (\in_array($columnKey, $this->columnsNotInDataSet, true)) {
                    $cells[] = $renderFunction(new CellData($columnKey, ''), $rowData);

                } elseif (isset($cellsData[$columnKey])) {
                    $cells[] = $renderFunction($cellsData[$columnKey], $rowData);

                } else {
                    throw InconsistentDataException::byCoordinates($columnKey, $rowData->getRowIdentifier());
                }
            }
            $result .= (new Row($cells))->render();
        }
        $result .= '</tbody>';

        return $result;
    }

    /**
     * @param string $key
     * @return callable(CellData $cellData, RowData $rowData): Cell
     */
    private function getCellRenderFunction(string $key): callable
    {
        if (isset($this->cellRenderCallbacks[$key])) {
            return $this->cellRenderCallbacks[$key];
        }

        return function (CellData $cellData, RowData $rowData): Cell {
            return new Cell($cellData->getValue());
        };
    }

    /**
     * @param string[] $columnsNotInDataSet
     */
    public function setColumnsNotInDataSet(array $columnsNotInDataSet): void
    {
        $this->columnsNotInDataSet = $columnsNotInDataSet;
    }
}
