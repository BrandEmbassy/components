<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use PHPUnit\Framework\TestCase;

final class HeaderTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider HeaderDataProvider
     * @param string $snapshot
     * @param Header $header
     */
    public function testShouldRenderHeader(string $snapshot, Header $header): void
    {
        $this->assertSnapshot($snapshot, $header);
    }

    public function HeaderDataProvider(): array
    {
        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);
        $h1 = HeaderLevel::byValue(HeaderLevel::H1);
        $h2 = HeaderLevel::byValue(HeaderLevel::H2);

        return [
            'H1' => [
                __DIR__ . '/__snapshots__/h1.html',
                new Header('Some text', [$padding10], $h1),
            ],
            'H2' => [
                __DIR__ . '/__snapshots__/h2.html',
                new Header('Some text', [$padding10], $h2),
            ],
        ];
    }

}
