<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use PHPUnit\Framework\TestCase;

final class HeadingTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider headerDataProvider
     */
    public function testShouldRenderHeader(string $snapshot, Heading $header): void
    {
        $this->assertSnapshot($snapshot, $header);
    }


    /**
     * @return mixed[]
     */
    public function headerDataProvider(): array
    {
        $padding10 = UtilitiesOption::byValue(UtilitiesOption::PADDING_10);
        $h1 = HeadingLevel::byValue(HeadingLevel::H1);
        $h2 = HeadingLevel::byValue(HeadingLevel::H2);

        return [
            'H1' => [
                __DIR__ . '/__snapshots__/h1.html',
                new Heading('Some text', [$padding10], $h1),
            ],
            'H2' => [
                __DIR__ . '/__snapshots__/h2.html',
                new Heading('Some text', [$padding10], $h2),
            ],
        ];
    }
}
