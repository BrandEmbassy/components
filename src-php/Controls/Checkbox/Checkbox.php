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
     * @var bool
     */
    private $disabled;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param string                                    $label
     * @param string                                    $id
     * @param string                                    $name
     * @param string                                    $value
     * @param bool                                      $checked
     * @param bool                                      $disabled
     */
    public function __construct(
        $children,
        string $label,
        string $id,
        string $name,
        string $value,
        bool $checked,
        bool $disabled = false
    ) {
        $this->children = is_array($children) ? $children : [$children];
        $this->label = $label;
        $this->id = $id;
        $this->name = $name;
        $this->value = $value;
        $this->checked = $checked;
        $this->disabled = $disabled;
    }


    public function render(): string
    {
        $checkedAsHtml = $this->checked ? ' checked="checked"' : '';
        $disabled = $this->disabled ? ' disabled' : '';

        $escapedId = StringEscaper::escapeHtmlAttribute($this->id);

        StringEscaper::validateInputName($this->name);

        $inputHtml = '<input' . $disabled . ' type="checkbox"';
        $inputHtml .= ' id="' . $escapedId . '"';
        $inputHtml .= ' value="' . StringEscaper::escapeHtmlAttribute($this->value) . '"';
        $inputHtml .= ' name="' . $this->name . '"';
        $inputHtml .= $checkedAsHtml . '/>';

        $onclick = 'onclick="document.getElementById(\'' . $escapedId . '\').click();"';

        $html = '<div class="Checkbox__CheckboxContent Checkbox__hasBorder" ' . $onclick . '>';
        $html .= '<div class="Checkbox__Checkbox">'
            . $inputHtml
            . '<label onclick="return false;" for="' . $escapedId . '"></label>'
            . '</div>';
        $html .= ArrayRenderer::render($this->children);
        $html .= '<div class="Checkbox__Label">' . StringEscaper::escapeHtml($this->label) . '</div>';
        $html .= '</div>';

        return $html;
    }
}
