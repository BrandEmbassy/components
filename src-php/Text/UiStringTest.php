<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Text;

use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;

final class UiStringTest extends TestCase
{
    public function testStringIsEscaped(): void
    {
        $string = new UiString('<script>alert();</script>');

        Assert::assertSame('&lt;script&gt;alert();&lt;/script&gt;', $string->render());
    }


    public function testStringIsNotEscaped(): void
    {
        $string = new UiString('<script>alert();</script>', false);

        Assert::assertSame('<script>alert();</script>', $string->render());
    }
}
