<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class SelectboxTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getButtonsData
     * @param string    $snapshot
     * @param Selectbox $selectbox
     */
    public function testShouldRenderSelectbox(string $snapshot, Selectbox $selectbox): void
    {
        $this->assertSnapshot($snapshot, $selectbox);
    }


    /**
     * @return mixed[]
     */
    public function getButtonsData(): array
    {
        $selectboxOptions = [
            new SelectboxOption('value-1', 'Value 1', false),
            new SelectboxOption('value-2', 'Value 2', false),
        ];

        return [
            'selectboxNormal'                  => [
                __DIR__ . '/__snapshots__/selectboxNormal.html',
                new Selectbox(
                    $selectboxOptions,
                    'selectbox-"name"',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some <strong>description</strong>'
                ),
            ],
            'selectboxDisabled'                => [
                __DIR__ . '/__snapshots__/selectboxDisabled.html',
                new Selectbox(
                    [],
                    'selectbox-"name"',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some <strong>description</strong>',
                    false,
                    true
                ),
            ],
            'selectboxWithErrorOnly'           => [
                __DIR__ . '/__snapshots__/selectboxWithErrorOnly.html',
                new Selectbox(
                    $selectboxOptions,
                    'selectbox-name',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    '',
                    true
                ),
            ],
            'selectboxWithErrorAndDescription' => [
                __DIR__ . '/__snapshots__/selectboxWithErrorAndDescription.html',
                new Selectbox(
                    $selectboxOptions,
                    'selectbox-name',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some description',
                    true
                ),
            ],
            'selectboxWide'                    => [
                __DIR__ . '/__snapshots__/selectboxWide.html',
                new Selectbox($selectboxOptions, 'selectbox-name', SelectboxType::byValue(SelectboxType::WIDE)),
            ],
        ];
    }
}
