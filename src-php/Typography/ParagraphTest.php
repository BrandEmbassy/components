<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use PHPUnit\Framework\TestCase;

class ParagraphTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testShouldRenderParagraph(): void
    {
        $snapshot = __DIR__ . '/__snapshots__/p.html';

        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);

        $p = new Paragraph('Some text', [$padding10]);

        $this->assertSnapshot($snapshot, $p);
    }

}
