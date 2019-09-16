<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;

final class StringValueTest extends TestCase
{
    public function testStringValueIsRendered(): void
    {
        $value = new StringValue('foo');

        $rendered = $value->render();

        Assert::assertSame('"foo"', $rendered);
    }


    public function testValueIsEscapedProperly(): void
    {
        $value = new StringValue('<strong>foo</strong>');

        $rendered = $value->render();

        Assert::assertSame('"\x3Cstrong\x3Efoo\x3C\x2Fstrong\x3E"', $rendered);
    }
}
