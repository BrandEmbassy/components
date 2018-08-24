<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\Controls\Button\Button;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class LinkTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider getLinkData
     * @param string $snapshot
     * @param Link $link
     */
    public function testRendering(string $snapshot, Link $link): void
    {
        $this->assertSnapshot($snapshot, $link);
    }

    public function getLinkData(): array
    {
        return [
            'linkUrl' => [__DIR__ . '/__snapshots__/linkUrl.html', new Link('Edit', 'http://google.com')],
            'linkDefault' => [
                __DIR__ . '/__snapshots__/linkDefault.html',
                new Link('Edit', null, Link::DEFAULT, 'be-icon-pencil'),
            ],
            'linkBlue' => [
                __DIR__ . '/__snapshots__/linkBlue.html',
                new Link('Edit', null, Link::BLUE, 'be-icon-pencil'),
            ],
            'linkWhite' => [
                __DIR__ . '/__snapshots__/linkWhite.html',
                new Link('Edit', null, Link::WHITE, 'be-icon-pencil'),
            ],
        ];
    }

}
