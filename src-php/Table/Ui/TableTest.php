<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\Align;
use BrandEmbassy\Components\Controls\Link\Link;
use BrandEmbassy\Components\Controls\Link\LinkColor;
use BrandEmbassy\Components\Table\Model\ArrayDataProvider;
use BrandEmbassy\Components\Table\Model\CellData;
use BrandEmbassy\Components\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\Table\Model\RowData;
use BrandEmbassy\Components\Table\Model\TableDefinition;
use BrandEmbassy\Components\SnapshotAssertTrait;
use GuzzleHttp\Psr7\Uri;
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
            new ColumnDefinition('actions', 'Actions', Align::get(Align::RIGHT), '50%'),
        ];
        $table = new Table(new TableDefinition($columnDefinition), $dataProvider);
        $table->setColumnsNotInDataSet(['actions']);
        $table->setCellRenderCallback(
            'actions',
            function (CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition): Cell {
                $link = new Link(
                    'Delete',
                    new Uri('http://yolo?id=' . $rowData->getRowIdentifier()),
                    LinkColor::get(LinkColor::BLUE)
                );

                return new Cell($link, $columnDefinition);
            }
        );

        $this->assertSnapshot(__DIR__ . '/__snapshots__/table.html', $table);
    }

}
