<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use PHPUnit\Framework\TestCase;

final class StylesTest extends TestCase
{

    public function testShouldRenderToHtmlAttribute(): void
    {
        $styles = new Styles(['a' => 'a1', 'b' => 'b1']);
        $this->assertEquals(' style="a: a1; b: b1;"', $styles->getHtmlAttribute());

        $styles = $styles
            ->with('a', 'a2')
            ->with('c', 'c1');

        $this->assertEquals(' style="a: a2; b: b1; c: c1;"', $styles->getHtmlAttribute());
    }

    public function testMergeMergesWithStylesObjects(): void
    {
        $styles = new Styles(['a' => 'a1', 'b' => 'b1']);
        $merged = $styles->merge(new Styles(['a' => 'a2', 'c' => 'c1']));

        $this->assertEquals(' style="a: a2; b: b1; c: c1;"', $merged->getHtmlAttribute());
    }

}
