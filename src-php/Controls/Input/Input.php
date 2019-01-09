<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use BrandEmbassy\Components\ArrayRenderer;
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
     * @var UiComponent|string
     */
    private $description;

    /**
     * @var bool
     */
    private $isError;

    /**
     * @var InputSize|null
     */
    private $inputSize;

    public function __construct(
        string $name,
        string $value,
        InputType $type,
        $description = '',
        bool $isError = false,
        ?InputSize $inputSize = null
    ) {
        $this->name = $name;
        $this->value = $value;
        $this->type = (string)$type->getValue();
        $this->description = $description;
        $this->isError = $isError;
        $this->inputSize = $inputSize !== null ? $inputSize : InputSize::byValue(InputSize::AUTOMATIC);
    }

    public function render(): string
    {
        $errorClass = $this->isError ? ' Input__Error' : '';
        $description = $this->description !== ''
            ? '<div class="Input__Desc">' . ArrayRenderer::render([$this->description]) . '</div>'
            : '';

        $maxWidth = $this->inputSize->getMaxWidth();
        $maxWidthArgument = $maxWidth !== null ? 'style="max-width: ' . $maxWidth . 'px;" ' : '';

        return '<div class="Input__Input' . $errorClass . '" data-reactroot="">'
            . '<div class="Input__Field">'
            . '<input type="' . $this->type . '" name="' . StringEscaper::escapeHtmlAttribute($this->name)
            . '" value="' . StringEscaper::escapeHtmlAttribute($this->value) . '" ' . $maxWidthArgument . '/></div>'
            . $description . '</div>';
    }

}
