<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Radio;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class Radio implements UiComponent
{

    public const CHECKED = true;
    public const NOT_CHECKED = false;

    /**
     * @var string
     */
    private $label;

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

    public function __construct(string $label, string $id, string $name, string $value, bool $checked)
    {
        $this->label = $label;
        $this->id = $id;
        $this->name = $name;
        $this->value = $value;
        $this->checked = $checked;
    }

    public function render(): string
    {
        $checkedAsHtml = $this->checked ? ' checked="checked"' : '';

        $inputHtmlTemplate = '<input type="radio" id="%s" name="%s" value="%s"%s />';
        $inputHtml = \sprintf($inputHtmlTemplate, $this->id, $this->name, $this->value, $checkedAsHtml);

        $onclick = \sprintf('onclick="document.getElementById(\'%s\').click();"', $this->id);

        $html = \sprintf('<div class="Radio__RadioContent" data-reactroot="" %s>', $onclick);
        $html .= '<div class="Radio__Radio">'
            . $inputHtml
            . \sprintf('<label for="%s"></label>', $this->id)
            . '</div>';
        $html .= \sprintf('<div class="Radio__Label">%s</div>', StringEscaper::escapeHtml($this->label));
        $html .= '</div>';

        return $html;
    }

}
