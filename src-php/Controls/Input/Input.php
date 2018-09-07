<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use BrandEmbassy\Components\StringEscaper;
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

    /**
     * @var string
     */
    private $description;

    /**
     * @var bool
     */
    private $isError;

    public function __construct(
        string $name,
        string $value,
        InputType $type,
        string $description = '',
        bool $isError = false
    ) {
        $this->name = $name;
        $this->value = $value;
        $this->type = (string)$type->getValue();
        $this->description = $description;
        $this->isError = $isError;
    }

    public function render(): string
    {
        $errorClass = $this->isError ? ' Input__Error' : '';
        $description = $this->description !== ''
            ? '<div class="Input__Desc">' . StringEscaper::escapeHtml($this->description) . '</div>'
            : '';

        return '<div class="Input__Input' . $errorClass . '" data-reactroot="">'
            . '<div class="Input__Field">'
            . '<input type="' . $this->type . '" name="' . StringEscaper::escapeHtmlAttribute($this->name)
            . '" value="' . StringEscaper::escapeHtmlAttribute($this->value) . '" /></div>'
            . $description . '</div>';
    }

}
