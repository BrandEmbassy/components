<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\SelectList;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class SelectList implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     */
    public function __construct($children)
    {
        $this->children = \is_array($children) ? $children : [$children];
    }

    public function render(): string
    {
        return \sprintf(
            '<div class="select-list-654d">%s</div>',
            ArrayRenderer::render($this->children)
        );
    }

}
