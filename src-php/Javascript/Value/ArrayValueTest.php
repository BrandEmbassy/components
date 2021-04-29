<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;

final class ArrayValueTest extends TestCase
{
    public function testArrayValueIsRendered(): void
    {
        $value = new ArrayValue(
            [
                new StringValue('foo'),
                new IntValue(10),
                new BoolValue(true),
            ]
        );

        $rendered = $value->render();

        Assert::assertSame('["foo", 10, true]', $rendered);
    }
}
