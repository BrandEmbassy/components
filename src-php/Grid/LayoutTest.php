<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class LayoutTest extends TestCase
{
    use SnapshotAssertTrait;

    public function testShouldRenderRow(): void
    {
        $snapshot = __DIR__ . '/__snapshots__/layout.html';

        $subLayouts = [
            new SubLayout('A', SubLayoutType::get(SubLayoutType::STATIC)),
            new SubLayout('B', SubLayoutType::get(SubLayoutType::FLEX)),
        ];

        $row = new Layout($subLayouts);

        $this->assertSnapshot($snapshot, $row);
    }
}
