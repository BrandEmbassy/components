<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class HeaderCell implements UiComponent
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
        return '<th>' . ArrayRenderer::render($this->children) . '</th>';
    }

}
