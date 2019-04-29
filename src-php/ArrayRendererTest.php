<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use BrandEmbassy\Components\Typography\Paragraph;
use PHPUnit\Framework\TestCase;

final class ArrayRendererTest extends TestCase
{
    public function testRenderingArray(): void
    {
        $components = [
            new Paragraph('Foo'),
            'Bar',
            new Paragraph('Baz'),
        ];

        $rendered = ArrayRenderer::render($components);

        self::assertSame('<p class="">Foo</p>Bar<p class="">Baz</p>', $rendered);
    }
}
