<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Textarea;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use function is_string;
use function sprintf;

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

    /**
     * @var string|UiComponent
     */
    private $description;

    /**
     * @var bool
     */
    private $isError;


    /**
     * @param string             $name
     * @param string             $value
     * @param int                $rows
     * @param bool               $disabled
     * @param string|UiComponent $description
     * @param bool               $isError
     */
    public function __construct(
        string $name,
        string $value,
        int $rows,
        bool $disabled = false,
        $description = '',
        bool $isError = false
    ) {
        $this->name = $name;
        $this->value = $value;
        $this->rows = $rows;
        $this->disabled = $disabled;
        $this->description = $description;
        $this->isError = $isError;
    }


    public function render(): string
    {
        $value = StringEscaper::escapeHtmlAttribute($this->value);
        $name = StringEscaper::escapeHtml($this->name);
        $disabled = $this->disabled ? ' disabled' : '';
        $errorClass = $this->isError ? ' Textarea__Error' : '';
        $descriptionTemplate = '<div class="Textarea__Desc">%s</div>';
        if (is_string($this->description) && $this->description !== '') {
            $description = sprintf($descriptionTemplate, StringEscaper::escapeHtml($this->description));
        } elseif ($this->description instanceof UiComponent) {
            $description = sprintf($descriptionTemplate, $this->description->render());
        } else {
            $description = '';
        }

        return '<div class="Textarea__Textarea' . $errorClass . '">
            <div class="Textarea__Field">
                <textarea' . $disabled . ' rows="' . $this->rows . '" name="' . $name . '">' . $value . '</textarea>
            </div>
            ' . $description . '
        </div>';
    }
}
