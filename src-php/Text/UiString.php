<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Text;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class UiString implements UiComponent
{
    /**
     * @var string
     */
    private $content;

    /**
     * @var bool
     */
    private $escapeHtml;


    public function __construct(string $content, bool $escapeHtml = true)
    {
        $this->content = $content;
        $this->escapeHtml = $escapeHtml;
    }


    public function render(): string
    {
        if (!$this->escapeHtml) {
            return $this->content;
        }

        return StringEscaper::escapeHtml($this->content);
    }
}
