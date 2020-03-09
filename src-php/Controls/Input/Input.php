<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

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
     * @var InputSize
     */
    private $inputSize;

    /**
     * @var string
     */
    private $placeholder;

    /**
     * @var bool
     */
    private $isDisabled;

    /**
     * @var bool
     */
    private $isReadOnly;


    public function __construct(
        string $name,
        string $value,
        InputType $type,
        $description = '',
        bool $isError = false,
        ?InputSize $inputSize = null,
        string $placeholder = '',
        bool $isDisabled = false,
        bool $isReadOnly = false
    ) {
        $this->name = $name;
        $this->value = $value;
        $this->type = $type->getValue();
        $this->description = $description;
        $this->isError = $isError;
        $this->inputSize = $inputSize ?? InputSize::byValue(InputSize::AUTOMATIC);
        $this->placeholder = $placeholder;
        $this->isDisabled = $isDisabled;
        $this->isReadOnly = $isReadOnly;
    }


    public function render(): string
    {
        $errorClass = $this->isError ? ' Input__Error' : '';
        $description = $this->description !== ''
            ? '<div class="Input__Desc">' . ArrayRenderer::render([$this->description]) . '</div>'
            : '';

        $placeholder = $this->placeholder !== '' ?
            sprintf('placeholder="%s" ', StringEscaper::escapeHtmlAttribute($this->placeholder))
            : '';

        $maxWidth = $this->inputSize->getMaxWidth();
        $maxWidthArgument = $maxWidth !== null ? 'style="max-width: ' . $maxWidth . 'px;" ' : '';

        $disabled = $this->isDisabled ? ' disabled' : '';
        $disabledClass = $this->isDisabled ? ' Input__Disabled' : '';

        $readOnly = $this->isReadOnly ? ' readonly' : '';
        $readOnlyClass = $this->isReadOnly ? ' Input__Disabled' : '';

        $attributes = $disabled . $readOnly;

        return '<div class="Input__Input' . $errorClass . $disabledClass . $readOnlyClass . '">'
            . '<div class="Input__Field">'
            . '<input' . $attributes . ' type="' . $this->type . '" name="' . StringEscaper::escapeHtmlAttribute($this->name)
            . '" value="' . StringEscaper::escapeHtmlAttribute($this->value) . '" '
            . $placeholder . $maxWidthArgument . '/></div>'
            . $description . '</div>';
    }
}
