<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class SelectboxOptionTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider optionsData
     * @param string $snapshot
     * @param SelectboxOption $option
     */
    public function testShouldRenderSelectboxOption(string $snapshot, SelectboxOption $option): void
    {
        $this->assertSnapshot($snapshot, $option);
    }

    public function optionsData(): array
    {
        return [
            'optionSelected' => [
                __DIR__ . '/__snapshots__/optionSelected.html',
                new SelectboxOption('test-value-"test"', 'Test value <strong>text</strong>', true),
            ],
            'optionNotSelected' => [
                __DIR__ . '/__snapshots__/optionNotSelected.html',
                new SelectboxOption('test-value', 'Test value text', false),
            ],
        ];
    }

}
