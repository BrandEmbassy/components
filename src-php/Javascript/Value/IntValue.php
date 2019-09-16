<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

final class IntValue implements JavascriptValue
{
    /**
     * @var int
     */
    private $value;


    public function __construct(int $value)
    {
        $this->value = $value;
    }


    public function render(): string
    {
        return (string)$this->value;
    }
}
