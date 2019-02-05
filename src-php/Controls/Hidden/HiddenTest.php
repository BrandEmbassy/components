<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Hidden;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class HiddenTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider getInputData
     * @param string $snapshot
     * @param Hidden $input
     */
    public function testRenderedHiddenField(string $snapshot, Hidden $input): void
    {
        $this->assertSnapshot($snapshot, $input);
    }

    public function getInputData(): array
    {
        return [
            'hiddenInput' => [
                __DIR__ . '/__snapshots__/hiddenInput.html',
                new Hidden('input-name', 'Input value'),
            ],
            'hiddenInputWithSpecialChars' => [
                __DIR__ . '/__snapshots__/hiddenInputWithSpecialChars.html',
                new Hidden(
                    'input-name-with-dot.something',
                    'Input value <script>alert(\'Hello\');</script>'
                ),
            ],
        ];
    }

}
