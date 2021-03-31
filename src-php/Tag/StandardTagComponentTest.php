<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\TagColor;
use PHPUnit\Framework\TestCase;

class StandardTagComponentTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider standardTagComponentProvider
     */
    public function testRenderTagWithClass(string $snapshotFileName, StandardTagComponent $component): void
    {
        $this->assertSnapshot($snapshotFileName, $component);
    }


    /**
     * @return mixed[]
     */
    public function standardTagComponentProvider(): array
    {
        return [
            [
                __DIR__ . '/__snapshots__/standardTag.html',
                new StandardTagComponent('Foo', TagColor::get(TagColor::RED)),
            ],
            [
                __DIR__ . '/__snapshots__/standardTagWithXssTitle.html',
                new StandardTagComponent('<script>alert(\'I am XSS Attack\');</script>', TagColor::get(TagColor::RED)),
            ],
        ];
    }
}
