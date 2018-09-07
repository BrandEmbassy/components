<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Breadcrumbs;

use Assert\Assertion;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Breadcrumbs implements UiComponent
{

    /**
     * @var Step[]
     */
    private $steps;

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param Step[] $steps
     */
    public function __construct($children, array $steps)
    {
        Assertion::allIsInstanceOf($steps, Step::class);
        $this->steps = $steps;
        $this->children = \is_array($children) ? $children : [$children];
    }

    public function render(): string
    {
        return '<div class="Breadcrumbs__Breadcrumbs">'
            . '<div class="Breadcrumbs__Textwrap">' . ArrayRenderer::render($this->steps) . '</div>'
            . '<div class="Breadcrumbs__Right">' . ArrayRenderer::render($this->children) . '</div>'
            . '</div>';
    }
}
