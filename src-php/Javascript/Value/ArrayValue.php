<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

final class ArrayValue implements JavascriptValue
{
    /**
     * @var array<JavascriptValue>
     */
    private $values;


    /**
     * @param array<JavascriptValue> $values
     */
    public function __construct(array $values)
    {
        $this->values = $values;
    }


    public function render(): string
    {
        $renderedValues = array_map(
            static function (JavascriptValue $value): string {
                return $value->render();
            },
            $this->values
        );

        return sprintf('[%s]', implode(', ', $renderedValues));
    }
}
