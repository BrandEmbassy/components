<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class TagComponentTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider tagComponentProvider
     */
    public function testRenderTagWithHslStyle(string $snapshotFileName, TagComponent $component): void
    {
        $this->assertSnapshot($snapshotFileName, $component);
    }


    /**
     * @return mixed[]
     */
    public function tagComponentProvider(): array
    {
        return [
            [
                __DIR__ . '/__snapshots__/hslTag.html',
                new TagComponent('#12f457', 'Foo'),
            ],
            [
                __DIR__ . '/__snapshots__/hslTagWithXssTitle.html',
                new TagComponent('#12f457', '<script>alert(\'I am XSS Attack\');</script>'),
            ],
        ];
    }
}
