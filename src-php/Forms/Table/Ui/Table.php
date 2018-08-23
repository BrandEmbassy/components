<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

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

    public function __construct(TableDefinition $tableDefinition, DataProvider $dataProvider)
    {
        $this->tableDefinition = $tableDefinition;
        $this->dataProvider = $dataProvider;
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
        $result = '</tbody>';
        foreach ($this->dataProvider->getIterator() as $rowData) {
            \assert($rowData instanceof RowData);
            $cells = array_map(
                function (CellData $cellData): Cell {
                    return new Cell($cellData->getValue());
                },
                $rowData->getCellsData()
            );

            $result .= (new Row($cells))->render();
        }
        $result .= '</tbody>';

        return $result;
    }
}
