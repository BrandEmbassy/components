<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use Assert\Assertion;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Layout implements UiComponent
{
    /**
     * @var SubLayout[]
     */
    private $subLayouts;


    /**
     * @param SubLayout[] $subLayouts
     */
    public function __construct(array $subLayouts)
    {
        Assertion::allIsInstanceOf($subLayouts, SubLayout::class);
        $this->subLayouts = $subLayouts;
    }


    public function render(): string
    {
        return '<div class="App__App">' . ArrayRenderer::render($this->subLayouts) . '</div>';
    }
}
