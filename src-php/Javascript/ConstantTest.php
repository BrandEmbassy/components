<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript;

use BrandEmbassy\Components\Javascript\Value\StringValue;
use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;

final class ConstantTest extends TestCase
{
    public function testConstantIsRendered(): void
    {
        $constant = new Constant('foo', new StringValue('bar'));

        $rendered = $constant->render();

        Assert::assertSame('const foo = "bar";', $rendered);
    }
}
