<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;

final class IntValueTest extends TestCase
{
    public function testIntValueIsRendered(): void
    {
        $value = new IntValue(10);

        $rendered = $value->render();

        Assert::assertSame('10', $rendered);
    }
}
