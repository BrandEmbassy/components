<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class SelectboxTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getButtonsData
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
                'snapshot'  => __DIR__ . '/__snapshots__/selectboxNormal.html',
                'selectbox' => new Selectbox(
                    $selectboxOptions,
                    'selectbox-"name"',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some <strong>description</strong>'
                ),
            ],
            'selectboxDisabled'                => [
                'snapshot'  => __DIR__ . '/__snapshots__/selectboxDisabled.html',
                'selectbox' => new Selectbox(
                    [],
                    'selectbox-"name"',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some <strong>description</strong>',
                    false,
                    true
                ),
            ],
            'selectboxWithErrorOnly'           => [
                'snapshot'  => __DIR__ . '/__snapshots__/selectboxWithErrorOnly.html',
                'selectbox' => new Selectbox(
                    $selectboxOptions,
                    'selectbox-name',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    '',
                    true
                ),
            ],
            'selectboxWithErrorAndDescription' => [
                'snapshot'  => __DIR__ . '/__snapshots__/selectboxWithErrorAndDescription.html',
                'selectbox' => new Selectbox(
                    $selectboxOptions,
                    'selectbox-name',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some description',
                    true
                ),
            ],
            'selectboxWide'                    => [
                'snapshot'  => __DIR__ . '/__snapshots__/selectboxWide.html',
                'selectbox' => new Selectbox($selectboxOptions, 'selectbox-name', SelectboxType::byValue(SelectboxType::WIDE)),
            ],
            'selectboxWithId'                => [
                'snapshot'  => __DIR__ . '/__snapshots__/selectboxWithId.html',
                'selectbox' => new Selectbox(
                    [],
                    'selectbox-"name"',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some <strong>description</strong>',
                    false,
                    false,
                    'some-id'
                ),
            ],
            'selectboxWithOnChange'                => [
                'snapshot'  => __DIR__ . '/__snapshots__/selectboxWithOnChange.html',
                'selectbox' => new Selectbox(
                    [],
                    'selectbox-"name"',
                    SelectboxType::byValue(SelectboxType::NORMAL),
                    'Some <strong>description</strong>',
                    false,
                    false,
                    null,
                    'someFunction(someVar)'
                ),
            ],
        ];
    }
}
