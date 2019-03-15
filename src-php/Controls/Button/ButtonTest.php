<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Button;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\Size;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class ButtonTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getButtonsData
     * @param string $snapshot
     * @param Button $button
     */
    public function testButtonRendering(string $snapshot, Button $button): void
    {
        $this->assertSnapshot($snapshot, $button);
    }


    /**
     * @return mixed[]
     */
    public function getButtonsData(): array
    {
        return [
            'buttonNoIcon'               => [
                __DIR__ . '/__snapshots__/buttonNoIcon.html',
                new Button('Save'),
            ],
            'buttonNoIconPositive'       => [
                __DIR__ . '/__snapshots__/buttonNoIcon.html',
                new Button('Save', Color::get(Color::POSITIVE)),
            ],
            'buttonNoIconWithXssAttempt' => [
                __DIR__ . '/__snapshots__/buttonNoIconWithXssAttempt.html',
                new Button('<script>alert(\'Ahoj!\');</script>'),
            ],
            'buttonWithIcon'             => [
                __DIR__ . '/__snapshots__/buttonWithIcon.html',
                new Button('Save', Color::get(Color::POSITIVE), IconType::get(IconType::PLUS)),
            ],
            'buttonNegative'             => [
                __DIR__ . '/__snapshots__/buttonNegative.html',
                new Button('Save', Color::get(Color::NEGATIVE)),
            ],
            'buttonSmallNegative'        => [
                __DIR__ . '/__snapshots__/buttonSmallNegative.html',
                new Button('Save', Color::get(Color::NEGATIVE), null, Size::get(Size::SMALL)),
            ],
        ];
    }
}
