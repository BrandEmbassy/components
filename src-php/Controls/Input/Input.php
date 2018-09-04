<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use BrandEmbassy\Components\UiComponent;

final class Input implements UiComponent
{

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $value;

    /**
     * @var string
     */
    private $type;

    public function __construct(string $name, string $value, InputType $type)
    {
        $this->name = $name;
        $this->value = $value;
        $this->type = (string)$type->getValue();
    }

    public function render(): string
    {
        return '<div class="Input__Input" data-reactroot="">'
            . '<div class="Input__Field">'
            . '<input type="' . $this->type . '" name="' . $this->name . '" value="' . $this->value . '" />'
            . '</div></div>';
    }

}
