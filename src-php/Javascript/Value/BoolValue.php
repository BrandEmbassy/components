<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

final class BoolValue implements JavascriptValue
{
    /**
     * @var bool
     */
    private $value;


    public function __construct(bool $value)
    {
        $this->value = $value;
    }


    public function render(): string
    {
        return $this->value ? 'true' : 'false';
    }
}
