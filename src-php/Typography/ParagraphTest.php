<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use PHPUnit\Framework\TestCase;

class ParagraphTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider paragraphData
     * @param string $snapshot
     * @param Paragraph $p
     */
    public function testShouldRenderParagraph(string $snapshot, Paragraph $p): void
    {
        $this->assertSnapshot($snapshot, $p);
    }

    public function paragraphData(): array
    {
        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);

        return [
            'More lines' => [
                __DIR__ . '/__snapshots__/pMoreLines.html',
                new Paragraph(['Some text', 'Another line'], [$padding10], Paragraph::NEW_LINE),
            ],
            'One line' => [
                __DIR__ . '/__snapshots__/pOneLine.html',
                new Paragraph('Some text', [$padding10]),
            ],
        ];
    }

}
