<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Breadcrumbs;

use Assert\Assert;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Breadcrumbs implements UiComponent
{

    /**
     * @var string[]
     */
    private $steps;

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param string[] $steps
     */
    public function __construct($children, array $steps)
    {
        Assert::thatAll($steps)->string();
        $this->steps = $steps;
        $this->children = \is_array($children) ? $children : [$children];
    }

    public function render(): string
    {
        $steps = array_map(
            function (string $text): Step {
                return new Step($text);
            },
            $this->steps
        );

        return '<div class="Breadcrumbs__Breadcrumbs">'
            . '<div class="Breadcrumbs__Textwrap">' . ArrayRenderer::render($steps) . '</div>'
            . '<div class="Breadcrumbs__Right">' . ArrayRenderer::render($this->children) . '</div>'
            . '</div>';
    }
}
