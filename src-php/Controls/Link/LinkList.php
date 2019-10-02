<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class LinkList implements UiComponent
{
    /**
     * @var UiComponent[]
     */
    private $links;


    /**
     * @param UiComponent[] $links
     */
    public function __construct(array $links)
    {
        $this->links = $links;
    }


    public function render(): string
    {
        return '<div class="Linklist__Linklist">' . ArrayRenderer::render($this->links) . '</div>';
    }
}
