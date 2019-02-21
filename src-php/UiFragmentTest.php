<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use BrandEmbassy\Components\Typography\Paragraph;
use PHPUnit\Framework\TestCase;

class UiFragmentTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testShouldRenderRow(): void
    {
        $snapshot = __DIR__ . '/__snapshots__/fragment.html';

        $row = new UiFragment([new Paragraph('Foo'), new Paragraph('Bar')]);

        $this->assertSnapshot($snapshot, $row);
    }

}
