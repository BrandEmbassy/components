<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Text;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use function is_array;

final class TextWithTitle implements UiComponent
{
    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var string
     */
    private $title;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     */
    public function __construct($children, string $title)
    {
        $this->children = is_array($children) ? $children : [$children];
        $this->title = $title;
    }


    public function render(): string
    {
        return '<span title="' . StringEscaper::escapeHtmlAttribute($this->title) . '">'
            . ArrayRenderer::render($this->children)
            . '</span>';
    }
}
