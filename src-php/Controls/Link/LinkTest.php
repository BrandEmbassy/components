<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\SnapshotAssertTrait;
use GuzzleHttp\Psr7\Uri;
use PHPUnit\Framework\TestCase;

final class LinkTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getLinkData
     */
    public function testRendering(string $snapshot, Link $link): void
    {
        $this->assertSnapshot($snapshot, $link);
    }


    /**
     * @return mixed[]
     */
    public function getLinkData(): array
    {
        return [
            'linkUrl'               => [
                __DIR__ . '/__snapshots__/linkUrl.html',
                new Link('Edit', new Uri('http://google.com')),
            ],
            'linkUrlWithXssAttempt' => [
                __DIR__ . '/__snapshots__/linkUrlWithXssAttempt.html',
                new Link('Edit', new Uri('http://google.com?="><script>alert(\'Ahoj!\');</script><a ')),
            ],
            'linkDefault'           => [
                __DIR__ . '/__snapshots__/linkDefault.html',
                new Link('Edit', null, LinkColor::get(LinkColor::DEFAULT), IconType::get(IconType::PENCIL)),
            ],
            'linkBlue'              => [
                __DIR__ . '/__snapshots__/linkBlue.html',
                new Link('Edit', null, LinkColor::get(LinkColor::BLUE), IconType::get(IconType::PENCIL)),
            ],
            'linkWhite'             => [
                __DIR__ . '/__snapshots__/linkWhite.html',
                new Link('Edit', null, LinkColor::get(LinkColor::WHITE), IconType::get(IconType::PENCIL)),
            ],

            'linkOnClick'           => [
                __DIR__ . '/__snapshots__/linkOnClick.html',
                new Link('Edit', null, null, null, 'return confirm(\'Are you sure?\')'),
            ],

            'linkTarget'            => [
                __DIR__ . '/__snapshots__/linkTarget.html',
                new Link('Foo', null, null, null, null, LinkTarget::get(LinkTarget::BLANK)),
            ],
        ];
    }
}
