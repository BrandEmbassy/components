<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Checkbox;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Checkbox implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var string
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $value;

    /**
     * @var bool
     */
    private $checked;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param string $id
     * @param string $name
     * @param string $value
     * @param bool $checked
     */
    public function __construct($children, string $id, string $name, string $value, bool $checked)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->id = $id;
        $this->name = $name;
        $this->value = $value;
        $this->checked = $checked;
    }

    public function render(): string
    {
        $checkedAsHtml = $this->checked ? 'checked="checked"' : '';

        $inputHtml = '<input type="checkbox" ';
        $inputHtml .= ' id="' . $this->id . '" value="' . $this->value . '" ';
        $inputHtml .= ' name="' . $this->name . '" ' . $checkedAsHtml . ' />';

        $html = '<div class="Checkbox__CheckboxContent" data-reactroot="">';
        $html .= '<div class="Checkbox__Checkbox">' . $inputHtml . '<label for="' . $this->id . '"></label></div>';
        $html .= '<div class="Checkbox__Label">' . ArrayRenderer::render($this->children) . '</div>';
        $html .= '</div>';

        return $html;
    }

}
