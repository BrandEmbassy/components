<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

use BrandEmbassy\Components\Controls\Link\Link;
use BrandEmbassy\Components\Controls\Link\LinkColor;
use BrandEmbassy\Components\Forms\Table\Model\ArrayDataProvider;
use BrandEmbassy\Components\Forms\Table\Model\CellData;
use BrandEmbassy\Components\Forms\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\Forms\Table\Model\RowData;
use BrandEmbassy\Components\Forms\Table\Model\TableDefinition;
use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\UiComponent;
use PHPUnit\Framework\TestCase;

final class TableTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testRendering(): void
    {
        $rowsData = [
            new RowData('1', ['name' => new CellData('name', 'John'), 'surname' => new CellData('surname', 'Smith')]),
            new RowData('2', ['name' => new CellData('name', 'Harry'), 'surname' => new CellData('surname', 'Potter')]),
        ];
        $dataProvider = new ArrayDataProvider($rowsData);
        $columnDefinition = [
            new ColumnDefinition('name', 'Name'),
            new ColumnDefinition('surname', 'Surname'),
            new ColumnDefinition('actions', 'Actions'),
        ];
        $table = new Table(new TableDefinition($columnDefinition), $dataProvider);
        $table->setColumnsNotInDataSet(['actions']);
        $table->setCellRenderCallback(
            'actions',
            function (CellData $cellData, RowData $rowData): Cell {
                $link = new Link(
                    'Delete',
                    'http://yolo?id=' . $rowData->getRowIdentifier(),
                    LinkColor::get(LinkColor::BLUE)
                );

                return new Cell($link->render());
            }
        );

        $this->assertSnapshot(__DIR__ . '/__snapshots__/table.html', $table);
    }

}
