<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Hidden;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class Hidden implements UiComponent
{

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $value;

    public function __construct(string $name, string $value)
    {
        $this->name = $name;
        $this->value = $value;
    }

    public function render(): string
    {
        return '<input type="hidden" name="' . StringEscaper::escapeHtmlAttribute($this->name) .
            '" value="' . StringEscaper::escapeHtmlAttribute($this->value) . '" />';
    }

}
