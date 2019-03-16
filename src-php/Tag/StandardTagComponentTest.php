<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\TagColor;
use PHPUnit\Framework\TestCase;

class StandardTagComponentTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testRenderTagWithClass(): void
    {
        $component = new StandardTagComponent('Foo', TagColor::get(TagColor::RED));
        $this->assertSnapshot(__DIR__ . '/__snapshots__/standardTag.html', $component);
    }
}
