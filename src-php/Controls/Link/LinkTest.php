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
            [__DIR__ . '/__snapshots__/linkDefault.html', new Link('Edit', Link::DEFAULT, 'be-icon-pencil')],
            [__DIR__ . '/__snapshots__/linkBlue.html', new Link('Edit', Link::BLUE, 'be-icon-pencil')],
            [__DIR__ . '/__snapshots__/linkWhite.html', new Link('Edit', Link::WHITE, 'be-icon-pencil')],
        ];
    }

}
