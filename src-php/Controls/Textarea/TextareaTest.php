<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Textarea;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class TextareaTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider textareaToTest
     * @param string   $expectedSnapshotPath
     * @param Textarea $textarea
     */
    public function testRender(string $expectedSnapshotPath, Textarea $textarea): void
    {
        $this->assertSnapshot($expectedSnapshotPath, $textarea);
    }


    /**
     * @return mixed[]
     */
    public function textareaToTest(): array
    {
        return [
            [
                __DIR__ . '/__snapshot__/render.html',
                new Textarea(
                    '"><script>alert(\'ahoj\');</script><"',
                    '"><script>alert(\'ahoj\');</script><"',
                    14
                ),
            ],
            [
                __DIR__ . '/__snapshot__/renderDisabled.html',
                new Textarea('foo', 'bar', 14, true),
            ],
        ];
    }
}
