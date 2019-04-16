<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Textarea;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class Textarea implements UiComponent
{
    /**
     * @var string
     */
    private $value;

    /**
     * @var int
     */
    private $rows;

    /**
     * @var string
     */
    private $name;

    /**
     * @var bool
     */
    private $disabled;


    public function __construct(string $name, string $value, int $rows, bool $disabled = false)
    {
        $this->name = $name;
        $this->value = $value;
        $this->rows = $rows;
        $this->disabled = $disabled;
    }


    public function render(): string
    {
        $value = StringEscaper::escapeHtmlAttribute($this->value);
        $name = StringEscaper::escapeHtml($this->name);
        $disabled = $this->disabled ? ' disabled' : '';

        return '<div class="Textarea__Textarea">
            <div class="Textarea__Field">
                <textarea' . $disabled . ' rows="' . $this->rows . '" name="' . $name . '">' . $value . '</textarea>
            </div>
        </div>';
    }
}
