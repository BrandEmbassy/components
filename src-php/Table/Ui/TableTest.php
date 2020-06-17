<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\Align;
use BrandEmbassy\Components\Controls\Link\Link;
use BrandEmbassy\Components\Controls\Link\LinkColor;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Table\Model\ArrayDataProvider;
use BrandEmbassy\Components\Table\Model\CellData;
use BrandEmbassy\Components\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\Table\Model\RowData;
use BrandEmbassy\Components\Table\Model\TableDefinition;
use BrandEmbassy\Components\Table\Model\TableRowDivider;
use BrandEmbassy\Components\Table\Model\TableRowDividerStyle;
use BrandEmbassy\Components\Text\UiString;
use DateTimeImmutable;
use GuzzleHttp\Psr7\Uri;
use LogicException;
use PHPUnit\Framework\TestCase;

final class TableTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testRendering(): void
    {
        $rowsData = [
            new RowData(
                '1',
                [
                    'name'    => new CellData('name', 'John'),
                    'surname' => new CellData('surname', 'Smith'),
                    'age'     => new CellData('age', 40),
                ]
            ),
            new RowData(
                '2',
                [
                    'name'    => new CellData('name', 'Harry'),
                    'surname' => new CellData('surname', 'Potter'),
                    'age'     => new CellData('age', 22),
                ]
            ),
            new RowData(
                '3',
                [
                    'name'    => new CellData('name', new UiString('Prokop')),
                    'surname' => new CellData('surname', new Icon(IconType::get(IconType::AGENT))),
                    'age'     => new CellData('age', 55),
                ]
            ),
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
            static function (CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition): Cell {
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


    public function testRenderWithHover(): void
    {
        $table = new Table(new TableDefinition([]), new ArrayDataProvider([]), true);

        $this->assertSnapshot(__DIR__ . '/__snapshots__/tableWithHover.html', $table);
    }


    /**
     * @dataProvider tableRowDividerStylesData
     * @param string $htmlFile
     * @param string $tableRowDividerStyle
     */
    public function testRenderWithRowDivider(string $htmlFile, string $tableRowDividerStyle): void
    {
        $rowsData = [
            new RowData(
                '1',
                [
                    'name' => new CellData('name', 'Addition'),
                    'expression' => new CellData('expression', 'a + b'),
                    'flags' => new CellData('flags', 'G'),
                ]
            ),
            new RowData(
                '2',
                [
                    'name' => new CellData('name', 'Subtraction'),
                    'expression' => new CellData('expression', 'a - b'),
                    'flags' => new CellData('flags', 'G'),
                ]
            ),
            new RowData(
                '3',
                [
                    'name' => new CellData('name', 'Multiplication'),
                    'expression' => new CellData('expression', 'a * b'),
                    'flags' => new CellData('flags', 'L'),
                ]
            ),
        ];
        $dataProvider = new ArrayDataProvider($rowsData);
        $columnDefinition = [
            new ColumnDefinition('name', 'Name'),
            new ColumnDefinition('expression', 'Expression'),
            new ColumnDefinition('flags', 'Flags', Align::get(Align::RIGHT), '10%'),
        ];
        $tableDefinition = new TableDefinition($columnDefinition);
        $tableRowDivider = new TableRowDivider(TableRowDividerStyle::get($tableRowDividerStyle), 'OR');
        $tableDefinition->setRowDivider($tableRowDivider);
        $table = new Table($tableDefinition, $dataProvider);

        $this->assertSnapshot(__DIR__ . '/__snapshots__/' . $htmlFile . '.html', $table);
    }


    /**
     * @return string[][]
     */
    public function tableRowDividerStylesData(): array
    {
        return [
            [
                'htmlFile' => 'tableWithRowDividerSingle',
                'tableRowDividerStyle' => TableRowDividerStyle::LABEL_SINGLE_ROW,
            ],
            [
                'htmlFile' => 'tableWithRowDividerSplitted',
                'tableRowDividerStyle' => TableRowDividerStyle::LABEL_SPLITTED_ROW,
            ],
        ];
    }


    public function testRaisesErrorOnInvalidDataForRendering(): void
    {
        $rowsData = [new RowData('1', ['datetime' => new CellData('datetime', new DateTimeImmutable())])];
        $dataProvider = new ArrayDataProvider($rowsData);
        $columnDefinition = [new ColumnDefinition('datetime', 'Datetime')];
        $table = new Table(new TableDefinition($columnDefinition), $dataProvider);

        $this->expectException(LogicException::class);
        $this->expectExceptionMessage(
            'Default cell render function can only render string|int|UiComponent values but "object" given. '
            . 'If you want to render other types, register your own render function via: setCellRenderCallback() method'
        );

        $table->render();
    }
}
