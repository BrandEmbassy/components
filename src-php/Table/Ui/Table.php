<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\Table\Model\InconsistentDataException;
use BrandEmbassy\Components\Table\Model\TableIterator;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Table\Model\CellData;
use BrandEmbassy\Components\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\Table\Model\DataProvider;
use BrandEmbassy\Components\Table\Model\RowData;
use BrandEmbassy\Components\Table\Model\TableDefinition;
use LogicException;

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
     * @var (callable(CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition, TableIterator $iterator): Cell)[]
     */
    private $cellRenderCallbacks;

    /**
     * @var string[]
     */
    private $columnsNotInDataSet = [];

    public function __construct(TableDefinition $tableDefinition, DataProvider $dataProvider)
    {
        $this->tableDefinition = $tableDefinition;
        $this->dataProvider = $dataProvider;
    }

    /**
     * @param string $column
     * @param callable(CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition): Cell $function
     */
    public function setCellRenderCallback(string $column, callable $function): void
    {
        $this->cellRenderCallbacks[$column] = $function;
    }

    public function render(): string
    {
        $result = '<div class="Table__Table Table__isStriped"><table>';
        $result .= $this->renderHead();
        $result .= $this->renderBody();
        $result .= '</table></div>';

        return $result;
    }

    private function renderHead(): string
    {
        $headerCells = array_map(
            function (ColumnDefinition $columnDefinition): HeaderCell {
                return new HeaderCell($columnDefinition->getHeaderLabel(), $columnDefinition->getAlign());
            },
            $this->tableDefinition->getColumnDefinitions()
        );

        return '<thead>' . (new HeaderRow($headerCells))->render() . '</thead>';
    }

    private function renderBody(): string
    {
        $result = '<tbody>';
        $iterator = $this->dataProvider->getIterator();
        foreach ($iterator as $rowData) {
            \assert($rowData instanceof RowData);
            $cellsData = $rowData->getCellsData();

            /** @var Cell[] $cells */
            $cells = [];
            foreach ($this->tableDefinition->getColumnDefinitions() as $columnDefinition) {
                $columnKey = $columnDefinition->getKey();
                $renderFunction = $this->getCellRenderFunction($columnDefinition->getKey());

                if (\in_array($columnKey, $this->columnsNotInDataSet, true)) {
                    $cells[] = $renderFunction(new CellData($columnKey, ''), $rowData, $columnDefinition, $iterator);

                } elseif (isset($cellsData[$columnKey])) {
                    $cells[] = $renderFunction($cellsData[$columnKey], $rowData, $columnDefinition, $iterator);

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
     * @return callable(CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition, TableIterator $iterator): Cell
     */
    private function getCellRenderFunction(string $key): callable
    {
        if (isset($this->cellRenderCallbacks[$key])) {
            return $this->cellRenderCallbacks[$key];
        }

        return function (
            CellData $cellData,
            RowData $rowData,
            ColumnDefinition $columnDefinition,
            TableIterator $iterator
        ): Cell {
            $value = $cellData->getValue();
            if (!\is_string($value) && !\is_int($value)) {
                $errorMessage = \sprintf(
                    'Default cell render function can only render string/int values but "%s" given. '
                    . 'If you want to render other types, register your own render function via: '
                    . 'setCellRenderCallback() method',
                    \gettype($value)
                );
                throw new LogicException($errorMessage);
            }

            return new Cell($value, $columnDefinition);
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
