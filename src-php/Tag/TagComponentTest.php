<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

class TagComponentTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testShouldRenderTag(): void
    {
        $component = new TagComponent('#12f457', 'Foo');
        $this->assertSnapshot(__DIR__ . '/__snapshots__/tag.html', $component);
    }

}
