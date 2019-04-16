<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Checkbox;

use BrandEmbassy\Components\SnapshotAssertTrait;
use InvalidArgumentException;
use PHPUnit\Framework\TestCase;

final class CheckboxTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getInputData
     * @param string   $snapshot
     * @param Checkbox $checkbox
     */
    public function testShouldRenderInput(string $snapshot, Checkbox $checkbox): void
    {
        $this->assertSnapshot($snapshot, $checkbox);
    }


    /**
     * @return mixed[]
     */
    public function getInputData(): array
    {
        return [
            'render'         => [
                __DIR__ . '/__snapshots__/render.html',
                new Checkbox('', 'Baz', 'foo', 'bar', 'yolo', true),
            ],
            'renderXSS'      => [
                __DIR__ . '/__snapshots__/renderXSS.html',
                new Checkbox(
                    '<script>alert(\'ahoj\');</script>',
                    '"><script>alert(\'ahoj\');</script><"',
                    '"><script>alert(\'ahoj\');</script><"',
                    'yolo-name',
                    '"><script>alert(\'ahoj\');</script><"',
                    true
                ),
            ],
            'renderDisabled' => [
                __DIR__ . '/__snapshots__/renderDisabled.html',
                new Checkbox('', 'Baz', 'foo', 'bar', 'yolo', false),
            ],
        ];
    }


    public function testRaisesErrorOnInvalidName(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Name must be alphanumerical and (-_[]) but ""><script>alert(\'ahoj\');</script><"" given.');
        $checkbox = new Checkbox('', '', 'id', '"><script>alert(\'ahoj\');</script><"', '', false);
        $checkbox->render();
    }
}
