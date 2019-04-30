<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Radio;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class RadioTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider radioDataProvider
     * @param string $snapshot
     * @param Radio  $radio
     */
    public function testButtonRendering(string $snapshot, Radio $radio): void
    {
        $this->assertSnapshot($snapshot, $radio);
    }


    /**
     * @return mixed[]
     */
    public function radioDataProvider(): array
    {
        return [
            'radioChecked'       => [
                __DIR__ . '/__snapshots__/radioChecked.html',
                new Radio('Foo label', 'fooId', 'fooName', 'fooValue', Radio::CHECKED),
            ],
            'radioNotChecked'    => [
                __DIR__ . '/__snapshots__/radioNotChecked.html',
                new Radio('Foo label', 'fooId', 'fooName', 'fooValue', Radio::NOT_CHECKED),
            ],
            'radioDisabled'      => [
                __DIR__ . '/__snapshots__/radioDisabled.html',
                new Radio('', 'fooId', 'fooName', '', Radio::NOT_CHECKED, true),
            ],
            'radioXss'           => [
                __DIR__ . '/__snapshots__/radioXss.html',
                new Radio(
                    '<strong>label</strong>',
                    '<strong>id</strong>',
                    'name',
                    '<strong>value</strong>',
                    Radio::CHECKED
                ),
            ],
            'radioWithArrayName' => [
                __DIR__ . '/__snapshots__/radioWithArrayName.html',
                new Radio('Foo label', 'fooId', 'fooName[bar]', 'fooValue', Radio::CHECKED),
            ],
        ];
    }
}
