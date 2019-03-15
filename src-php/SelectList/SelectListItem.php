<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\SelectList;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class SelectListItem implements UiComponent
{
    /**
     * @var UiComponent[]
     */
    private $children;


    /**
     * @param UiComponent[] $children
     */
    public function __construct(array $children)
    {
        $this->children = $children;
    }


    public function render(): string
    {
        return ArrayRenderer::render($this->children);
    }
}
