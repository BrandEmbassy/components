<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use BrandEmbassy\Components\SnapshotAssertTrait;
use BrandEmbassy\Components\Typography\Emphasized;
use PHPUnit\Framework\TestCase;

final class InputTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getInputData
     */
    public function testShouldRenderInput(string $snapshot, Input $input): void
    {
        $this->assertSnapshot($snapshot, $input);
    }


    /**
     * @return mixed[]
     */
    public function getInputData(): array
    {
        return [
            'textInput'                         => [
                __DIR__ . '/__snapshots__/textInput.html',
                new Input('input-name', 'Input value', InputType::byValue(InputType::TEXT), 'Some description'),
            ],
            'textInputWithComponentDescription' => [
                __DIR__ . '/__snapshots__/textInputWithComponentDescription.html',
                new Input(
                    'input-name',
                    'Input value',
                    InputType::byValue(InputType::TEXT),
                    new Emphasized('Some description')
                ),
            ],
            'textInputDisabled'                 => [
                __DIR__ . '/__snapshots__/textInputDisabled.html',
                new Input(
                    'input-name',
                    '',
                    InputType::byValue(InputType::TEXT),
                    '',
                    false,
                    null,
                    '',
                    true
                ),
            ],
            'textInputSmall'                    => [
                __DIR__ . '/__snapshots__/textInputSmall.html',
                new Input(
                    'input-name',
                    'Input value',
                    InputType::byValue(InputType::TEXT),
                    'Some description',
                    false,
                    InputSize::byValue(InputSize::SMALL)
                ),
            ],
            'textInputWithErrorOnly'            => [
                __DIR__ . '/__snapshots__/textInputWithErrorOnly.html',
                new Input('input-name', 'Input value', InputType::byValue(InputType::TEXT), '', true),
            ],
            'textInputWithErrorAndDescription'  => [
                __DIR__ . '/__snapshots__/textInputWithErrorAndDescription.html',
                new Input('input-name', 'Input value', InputType::byValue(InputType::TEXT), 'Some description', true),
            ],
            'numericInput'                      => [
                __DIR__ . '/__snapshots__/numericInput.html',
                new Input('input-name', 'Input value', InputType::byValue(InputType::NUMBER)),
            ],
            'textInputWithSpecialChars'         => [
                __DIR__ . '/__snapshots__/textInputWithSpecialChars.html',
                new Input(
                    'input-name-with-dot.something',
                    'Input value <script>alert(\'Hello\');</script>',
                    InputType::byValue(InputType::TEXT),
                    '<script>alert(\'Hello\');</script>'
                ),
            ],
            'textInputWithPlaceholder'          => [
                __DIR__ . '/__snapshots__/textInputWithPlaceholder.html',
                new Input(
                    'input-name',
                    'Input value',
                    InputType::byValue(InputType::TEXT),
                    'Some description',
                    false,
                    null,
                    'Foo bar'
                ),
            ],
            'textInputReadOnly'          => [
                __DIR__ . '/__snapshots__/textInputReadOnly.html',
                new Input(
                    'input-name',
                    '',
                    InputType::byValue(InputType::TEXT),
                    '',
                    false,
                    null,
                    '',
                    false,
                    true
                ),
            ],
        ];
    }
}
