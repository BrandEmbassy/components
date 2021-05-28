<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\DynamicDiv;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Styles;
use BrandEmbassy\Components\Text\UiString;
use PHPUnit\Framework\Assert;
use PHPUnit\Framework\TestCase;

final class DynamicDivTest extends TestCase
{
    /**
     * @dataProvider getDivDataProvider

     * @param Color|string $color
     */
    public function testDynamicDivRender(string $expectedResults, ?string $id, $color): void
    {
        $styles = [];
        $styles['height'] = '40px';
        $styles['color'] = $color;

        $div = new DynamicDiv([new UiString('some text to display')], new Styles($styles), $id);

        Assert::assertSame($expectedResults, $div->render());
    }


    /**
     * @return mixed[]
     */
    public function getDivDataProvider(): array
    {
        return [
            'with id' => [
                'expectedResults' => '<div id="someId" style="height: 40px; color: Green;">some text to display</div>',
                'id' => 'someId',
                'color' => 'Green',
            ],
            'without id' => [
                'expectedResults' => '<div style="height: 40px; color: Green;">some text to display</div>',
                'id' => null,
                'color' => 'Green',
            ],
            'color as string' => [
                'expectedResults' => '<div style="height: 40px; color: #329d53;">some text to display</div>',
                'id' => null,
                'color' => '#329d53',
            ],
            'color as Color object' => [
                'expectedResults' => '<div style="height: 40px; color: #329d53;">some text to display</div>',
                'id' => null,
                'color' => Color::get(Color::POSITIVE),
            ],
        ];
    }
}
