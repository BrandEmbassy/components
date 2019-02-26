<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid\GridColumn;

use BrandEmbassy\Components\Styles;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class GridColumnTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider columnsToRenderProvider
     * @param string $expectedSnapshot
     * @param GridColumn $columnToRender
     */
    public function testShouldRenderColumn(string $expectedSnapshot, GridColumn $columnToRender): void
    {
        $this->assertSnapshot($expectedSnapshot, $columnToRender);
    }

    public function columnsToRenderProvider(): array
    {
        return [
            [
                __DIR__ . '/__snapshots__/column.html',
                new GridColumn(
                    'Some text',
                   [
                       GridColumnOption::byValue(GridColumnOption::LG_4),
                       GridColumnOption::byValue(GridColumnOption::MD_3),
                   ],
                   [UtilitiesOption::byValue(UtilitiesOption::PADDING_10)]
                ),
            ],
            [
                __DIR__ . '/__snapshots__/columnWithStyles.html',
                new GridColumn(
                    'Some text',
                    [],
                    [UtilitiesOption::byValue(UtilitiesOption::PADDING_10)],
                    new Styles(['display' => 'none'])
                ),
            ],
        ];
    }

}
