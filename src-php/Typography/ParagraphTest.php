<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use PHPUnit\Framework\TestCase;

final class ParagraphTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider paragraphData
     */
    public function testShouldRenderParagraph(string $snapshot, Paragraph $p): void
    {
        $this->assertSnapshot($snapshot, $p);
    }


    /**
     * @return mixed[]
     */
    public function paragraphData(): array
    {
        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);

        return [
            'More lines with separator'    => [
                __DIR__ . '/__snapshots__/pMoreLines.html',
                new Paragraph(['Some text', 'Another line'], [$padding10], new NewLine()),
            ],
            'More lines without separator' => [
                __DIR__ . '/__snapshots__/pMoreLinesWithoutSeparator.html',
                new Paragraph(['Some text', 'Another line'], [$padding10]),
            ],
            'One line'                     => [
                __DIR__ . '/__snapshots__/pOneLine.html',
                new Paragraph('Some text', [$padding10]),
            ],
            'One line with separator'      => [
                __DIR__ . '/__snapshots__/pOneLine.html',
                new Paragraph('Some text', [$padding10], new NewLine()),
            ],
        ];
    }
}
