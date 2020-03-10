<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use BrandEmbassy\Components\Text\UiString;
use BrandEmbassy\Components\Typography\Paragraph;
use PHPUnit\Framework\TestCase;

final class ComponentRendererTest extends TestCase
{
    public function testRenderingMultipleComponents(): void
    {
        $components = [
            new Paragraph('Foo'),
            new UiString('Bar'),
            new Paragraph('Baz'),
        ];

        $rendered = ComponentRenderer::renderMultiple($components);

        self::assertSame('<p class="">Foo</p>Bar<p class="">Baz</p>', $rendered);
    }
}
