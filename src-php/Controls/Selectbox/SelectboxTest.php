<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class SelectboxTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider getButtonsData
     * @param string $snapshot
     * @param Selectbox $selectbox
     */
    public function testShouldRenderSelectbox(string $snapshot, Selectbox $selectbox): void
    {
        $this->assertSnapshot($snapshot, $selectbox);
    }

    public function getButtonsData(): array
    {
        $selectboxOptions = [
            new SelectboxOption('value-1', 'Value 1', false),
            new SelectboxOption('value-2', 'Value 2', false),
        ];

        return [
            'selectboxNormal' => [
                __DIR__ . '/__snapshots__/selectboxNormal.html',
                new Selectbox($selectboxOptions, 'selectbox-name', SelectboxType::byValue(SelectboxType::NORMAL)),
            ],
            'selectboxWide' => [
                __DIR__ . '/__snapshots__/selectboxWide.html',
                new Selectbox($selectboxOptions, 'selectbox-name', SelectboxType::byValue(SelectboxType::WIDE)),
            ],
        ];
    }

}
