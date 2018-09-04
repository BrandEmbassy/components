<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class InputTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider getInputData
     * @param string $snapshot
     * @param Input $input
     */
    public function testShouldRenderInput(string $snapshot, Input $input): void
    {
        $this->assertSnapshot($snapshot, $input);
    }

    public function getInputData(): array
    {
        return [
            'textInput' => [
                __DIR__ . '/__snapshots__/textInput.html',
                new Input('input-name', 'Input value', InputType::byValue(InputType::TEXT)),
            ],
            'numericInput' => [
                __DIR__ . '/__snapshots__/numericInput.html',
                new Input('input-name', 'Input value', InputType::byValue(InputType::NUMBER)),
            ],
        ];
    }

}
