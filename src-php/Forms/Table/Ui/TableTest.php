<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

use BrandEmbassy\Components\Forms\Table\Model\ArrayDataProvider;
use BrandEmbassy\Components\Forms\Table\Model\CellData;
use BrandEmbassy\Components\Forms\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\Forms\Table\Model\RowData;
use BrandEmbassy\Components\Forms\Table\Model\TableDefinition;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class TableTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testRendering(): void
    {
        $rowsData = [
            new RowData([new CellData('name', 'John'), new CellData('surname', 'Smith')]),
            new RowData([new CellData('name', 'Harry'), new CellData('surname', 'Potter')]),
        ];
        $dataProvider = new ArrayDataProvider($rowsData);
        $columnDefinition = [
            new ColumnDefinition('name', 'Name'),
            new ColumnDefinition('surname', 'Surname'),
        ];
        $table = new Table(new TableDefinition($columnDefinition), $dataProvider);

        $this->assertSnapshot(__DIR__ . '/__snapshots__/table.html', $table);
    }

}
