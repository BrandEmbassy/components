<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use BrandEmbassy\Components\Utilities\UtilitiesOption;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class GridRowTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testShouldRenderRow(): void
    {
        $snapshot = __DIR__ . '/__snapshots__/row.html';
        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);

        $row = new GridRow('Some text', [$padding10]);

        $this->assertSnapshot($snapshot, $row);
    }

}
