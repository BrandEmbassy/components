<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\NonIdealState;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Typography\Paragraph;
use PHPUnit\Framework\TestCase;

final class NonIdealStateTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testRendering(): void
    {
        $breadcrumbs = new NonIdealState(new Paragraph('Lorem ipsum dolor sit et amet.'), 'Foo bar baz');
        $this->assertSnapshot(__DIR__ . '/__snapshots__/nonIdealState.html', $breadcrumbs);
    }
}
