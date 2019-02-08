<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Text;

use BrandEmbassy\Components\Controls\Link\Link;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class TextWithTitleTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider textWithTitleData
     * @param string $snapshot
     * @param TextWithTitle $textWithTitle
     */
    public function testRenderedTextWithTitle(string $snapshot, TextWithTitle $textWithTitle): void
    {
        $this->assertSnapshot($snapshot, $textWithTitle);
    }

    public function textWithTitleData(): array
    {
        return [
            'Text with title' => [
                __DIR__ . '/__snapshots__/textWithTitle.html',
                new TextWithTitle('Some text', 'Title'),
            ],
            'Text containing link with title' => [
                __DIR__ . '/__snapshots__/textContainingLinkWithTitle.html',
                new TextWithTitle(new Link('Test link'), 'Title'),
            ],
        ];
    }

}
