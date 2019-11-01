<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;
use function is_array;

final class Emphasized implements UiComponent
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
        $this->children = is_array($children) ? $children : [$children];
    }


    public function render(): string
    {
        return '<em>' . ArrayRenderer::render($this->children) . '</em>';
    }
}
