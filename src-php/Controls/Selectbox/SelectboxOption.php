<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class SelectboxOption implements UiComponent
{
    public const IS_SELECTED = true;
    public const IS_NOT_SELECTED = false;

    /**
     * @var string
     */
    private $value;

    /**
     * @var string
     */
    private $text;

    /**
     * @var string
     */
    private $selected;


    public function __construct(string $value, string $text, bool $isSelected)
    {
        $this->value = $value;
        $this->text = $text;
        $this->selected = $isSelected ? ' selected="selected"' : '';
    }


    public function render(): string
    {
        return '<option value="' . StringEscaper::escapeHtmlAttribute($this->value) . '"' . $this->selected . '>'
            . ArrayRenderer::render([StringEscaper::escapeHtml($this->text)])
            . '</option>';
    }


    public function getValue(): string
    {
        return $this->value;
    }


    public function getText(): string
    {
        return $this->text;
    }
}
