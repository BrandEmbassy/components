<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class SubLayout implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var SubLayoutType
     */
    private $appType;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param SubLayoutType $appType
     */
    public function __construct($children, SubLayoutType $appType)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->appType = $appType;
    }

    public function render(): string
    {
        return '<div class="' . $this->appType->getValue() . '">'
            . ArrayRenderer::render($this->children)
            . '</div>';
    }

}
