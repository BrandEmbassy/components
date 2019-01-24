<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use PHPUnit\Framework\TestCase;

final class StylesTest extends TestCase
{

    public function testShouldRenderToHtmlAttribute(): void
    {
        $styles = new Styles(['a' => 'b']);
        $this->assertEquals(' style="a: b;"', $styles->getHtmlAttribute());

        $styles = $styles
            ->with('c', 'd')
            ->with('a', 'bbb');

        $this->assertEquals(' style="a: bbb; c: d;"', $styles->getHtmlAttribute());
    }

    public function testMergeMergesTwiStylesObjects(): void
    {
        $styles = new Styles(['a' => 'a1', 'b' => 'b1']);
        $merged = $styles->merge(new Styles(['a' => 'a2', 'b' => 'b1']));

        $this->assertEquals( ' style="a: a2; b: b1;"', $merged->getHtmlAttribute());
    }

}
