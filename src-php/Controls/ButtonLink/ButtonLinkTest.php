<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\ButtonLink;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\Size;
use BrandEmbassy\Components\SnapshotAssertTrait;
use GuzzleHttp\Psr7\Uri;
use PHPUnit\Framework\TestCase;

final class ButtonLinkTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider getButtonsData
     * @param string $snapshot
     * @param ButtonLink $button
     */
    public function testButtonRendering(string $snapshot, ButtonLink $button): void
    {
        $this->assertSnapshot($snapshot, $button);
    }

    public function getButtonsData(): array
    {

        return [
            'buttonNoIcon' => [
                __DIR__ . '/__snapshots__/buttonNoIcon.html',
                new ButtonLink('Save'),
            ],
            'buttonNoIconPositive' => [
                __DIR__ . '/__snapshots__/buttonNoIcon.html',
                new ButtonLink('Save', Color::get(Color::POSITIVE)),
            ],
            'buttonNoIconWithXssAttempt' => [
                __DIR__ . '/__snapshots__/buttonNoIconWithXssAttempt.html',
                new ButtonLink('<script>alert(\'Ahoj!\');</script>'),
            ],
            'buttonWithIcon' => [
                __DIR__ . '/__snapshots__/buttonWithIcon.html',
                new ButtonLink('Save', Color::get(Color::POSITIVE), IconType::get(IconType::PLUS)),
            ],
            'buttonNegative' => [
                __DIR__ . '/__snapshots__/buttonNegative.html',
                new ButtonLink('Save', Color::get(Color::NEGATIVE)),
            ],
            'buttonSmallNegative' => [
                __DIR__ . '/__snapshots__/buttonSmallNegative.html',
                new ButtonLink('Save', Color::get(Color::NEGATIVE), null, Size::get(Size::SMALL)),
            ],
            'buttonAsHyperlink' => [
                __DIR__ . '/__snapshots__/buttonAsHyperlink.html',
                new ButtonLink(
                    'Save',
                    null,
                    null,
                    null,
                    new Uri('https://google.com')
                ),
            ],
        ];
    }

}
