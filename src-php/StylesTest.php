<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use PHPUnit\Framework\TestCase;

final class StylesTest extends TestCase
{
    public function testShouldRenderToHtmlAttribute(): void
    {
        $styles = new Styles(['a' => 'a1', 'b' => 'b1']);
        self::assertEquals(' style="a: a1; b: b1;"', $styles->getHtmlAttribute());

        $styles = $styles
            ->with('a', 'a2')
            ->with('c', 'c1');

        self::assertEquals(' style="a: a2; b: b1; c: c1;"', $styles->getHtmlAttribute());
    }


    public function testMergeMergesWithStylesObjects(): void
    {
        $styles = new Styles(['a' => 'a1', 'b' => 'b1']);
        $merged = $styles->merge(new Styles(['a' => 'a2', 'c' => 'c1']));

        self::assertEquals(' style="a: a2; b: b1; c: c1;"', $merged->getHtmlAttribute());
    }


    public function testColorObjectRenderedAsColorString(): void
    {
        $styles = new Styles(['a' => 'a1', 'color' => Color::get(Color::NEGATIVE)]);
        self::assertEquals(' style="a: a1; color: #E8585D;"', $styles->getHtmlAttribute());
    }
}
