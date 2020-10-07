<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use BrandEmbassy\Components\Typography\NewLine;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use PHPUnit\Framework\TestCase;

final class DivTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider divData
     *
     * @param string $snapshot
     * @param Div    $div
     */
    public function testRenderDiv(string $snapshot, Div $div): void
    {
        $this->assertSnapshot($snapshot, $div);
    }


    /**
     * @return mixed[]
     */
    public function divData(): array
    {
        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);

        return [
            'without id: More lines with separator' => [
                __DIR__ . '/__snapshots__/divMoreLines.html',
                new Div(['Some text', 'Another line'], [$padding10], new NewLine()),
            ],
            'without id: More lines without separator' => [
                __DIR__ . '/__snapshots__/divMoreLinesWithoutSeparator.html',
                new Div(['Some text', 'Another line'], [$padding10]),
            ],
            'without id: One line' => [
                __DIR__ . '/__snapshots__/divOneLine.html',
                new Div('Some text', [$padding10]),
            ],
            'without id: One line with separator' => [
                __DIR__ . '/__snapshots__/divOneLine.html',
                new Div('Some text', [$padding10], new NewLine()),
            ],
            'with id: More lines with separator' => [
                __DIR__ . '/__snapshots__/divMoreLinesAndId.html',
                new Div(['Some text', 'Another line'], [$padding10], new NewLine(), 'superId'),
            ],
            'with id: More lines without separator' => [
                __DIR__ . '/__snapshots__/divMoreLinesWithoutSeparatorAndId.html',
                new Div(['Some text', 'Another line'], [$padding10], null, 'superId'),
            ],
            'with id: One line' => [
                __DIR__ . '/__snapshots__/divOneLineAndId.html',
                new Div('Some text', [$padding10], null, 'superId'),
            ],
            'with id: One line with separator' => [
                __DIR__ . '/__snapshots__/divOneLineAndId.html',
                new Div('Some text', [$padding10], new NewLine(), 'superId'),
            ],
        ];
    }
}
