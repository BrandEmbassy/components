<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Checkbox;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use function is_array;

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
     * @var string
     */
    private $label;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param string                                    $label
     * @param string                                    $id
     * @param string                                    $name
     * @param string                                    $value
     * @param bool                                      $checked
     */
    public function __construct($children, string $label, string $id, string $name, string $value, bool $checked)
    {
        $this->children = is_array($children) ? $children : [$children];
        $this->label = $label;
        $this->id = $id;
        $this->name = $name;
        $this->value = $value;
        $this->checked = $checked;
    }


    public function render(): string
    {
        $checkedAsHtml = $this->checked ? 'checked="checked"' : '';

        $inputHtml = '<input type="checkbox"';
        $inputHtml .= ' id="' . $this->id . '" value="' . $this->value . '"';
        $inputHtml .= ' name="' . $this->name . '" ' . $checkedAsHtml . '/>';

        $onclick = 'onclick="document.getElementById(\'' . $this->id . '\').click();"';

        $html = '<div class="Checkbox__CheckboxContent Checkbox__hasBorder" ' . $onclick . '>';
        $html .= '<div class="Checkbox__Checkbox">'
            . $inputHtml
            . '<label onclick="return false;" for="' . $this->id . '"></label>'
            . '</div>';
        $html .= ArrayRenderer::render($this->children);
        $html .= '<div class="Checkbox__Label">' . StringEscaper::escapeHtml($this->label) . '</div>';
        $html .= '</div>';

        return $html;
    }
}
