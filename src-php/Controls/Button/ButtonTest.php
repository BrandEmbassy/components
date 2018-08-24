<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Button;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\IconType;
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

    public function getButtonsData(): array
    {
        return [
            'buttonNoIcon' => [__DIR__ . '/__snapshots__/buttonNoIcon.html', new Button('Save')],
            'buttonNoIconPostitive' => [
                __DIR__ . '/__snapshots__/buttonNoIcon.html',
                new Button('Save', Color::get(Color::POSITIVE)),
            ],
            'buttonWithIcon' => [
                __DIR__ . '/__snapshots__/buttonWithIcon.html',
                new Button('Save', Color::get(Color::POSITIVE), IconType::get(IconType::PLUS)),
            ],
            'buttonNegative' => [
                __DIR__ . '/__snapshots__/buttonNegative.html',
                new Button('Save', Color::get(Color::NEGATIVE)),
            ],
        ];
    }

}
