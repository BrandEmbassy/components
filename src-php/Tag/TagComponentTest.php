<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\TagColor;
use PHPUnit\Framework\TestCase;

class TagComponentTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testRenderTagWithHslStyle(): void
    {
        $component = new TagComponent('#12f457', 'Foo');
        $this->assertSnapshot(__DIR__ . '/__snapshots__/hslTag.html', $component);
    }


    public function testRenderTagWithClass(): void
    {
        $component = new TagComponent(TagColor::get(TagColor::RED), 'Foo');
        $this->assertSnapshot(__DIR__ . '/__snapshots__/classTag.html', $component);
    }
}
