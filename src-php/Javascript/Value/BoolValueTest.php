<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;

final class BoolValueTest extends TestCase
{
    /**
     * @dataProvider boolValueProvider
     */
    public function testStringValueIsRendered(string $expectedJsRepresentation, bool $phpValue): void
    {
        $value = new BoolValue($phpValue);

        Assert::assertSame($expectedJsRepresentation, $value->render());
    }


    /**
     * @return bool[][]|string[][]
     */
    public function boolValueProvider(): array
    {
        return [
            [
                'expectedJsRepresentation' => 'true',
                'phpValue' => true,
            ],
            [
                'expectedJsRepresentation' => 'false',
                'phpValue' => false,
            ],
        ];
    }
}
