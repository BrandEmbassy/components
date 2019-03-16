<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid\GridColumn;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use PHPUnit\Framework\TestCase;

final class GridColumnTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testShouldRenderColumn(): void
    {
        $snapshot = __DIR__ . '/__snapshots__/column.html';
        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);
        $gridLg4 = GridColumnOption::byValue(GridColumnOption::LG_4);
        $gridMd3 = GridColumnOption::byValue(GridColumnOption::MD_3);

        $column = new GridColumn('Some text', [$gridLg4, $gridMd3], [$padding10]);

        $this->assertSnapshot($snapshot, $column);
    }
}
