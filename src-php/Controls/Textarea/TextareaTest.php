<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Textarea;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class TextareaTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testRender(): void
    {
        $textarea = new Textarea(
            '"><script>alert(\'ahoj\');</script><"',
            '"><script>alert(\'ahoj\');</script><"',
            14
        );

        $this->assertSnapshot(__DIR__ . '/__snapshot__/render.html', $textarea);
    }
}
