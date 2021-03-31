<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Textarea;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class TextareaTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider textareaToTest
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
                'expectedSnapshotPath' => __DIR__ . '/__snapshot__/render.html',
                'textarea' => new Textarea(
                    '"><script>alert(\'ahoj\');</script><"',
                    '"><script>alert(\'ahoj\');</script><"',
                    14
                ),
            ],
            [
                'expectedSnapshotPath' => __DIR__ . '/__snapshot__/renderDisabled.html',
                'textarea' => new Textarea('foo', 'bar', 14, true),
            ],
            [
                'expectedSnapshotPath' => __DIR__ . '/__snapshot__/renderWithDescription.html',
                'textarea' => new Textarea('myName', 'content', 14, false, 'Foo'),
            ],
            [
                'expectedSnapshotPath' => __DIR__ . '/__snapshot__/renderWithXssDescription.html',
                'textarea' => new Textarea(
                    'myName',
                    'content',
                    14,
                    false,
                    '"><script>alert(\'ahoj\');</script><"'
                ),
            ],
            [
                'expectedSnapshotPath' => __DIR__ . '/__snapshot__/renderWithError.html',
                'textarea' => new Textarea('myName', 'content', 14, false, '', true),
            ],
            [
                'expectedSnapshotPath' => __DIR__ . '/__snapshot__/renderWithPlaceholder.html',
                'textarea' => new Textarea(
                    'with-ph',
                    'my text',
                    4,
                    false,
                    '',
                    false,
                    'ABCD'
                ),
            ],
        ];
    }
}
