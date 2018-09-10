<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class LinkList implements UiComponent
{

    /**
     * @var array|Link[]
     */
    private $links;

    /**
     * @param Link[] $links
     */
    public function __construct(array $links)
    {
        $this->links = $links;
    }

    public function render(): string
    {
        return '<div>' . ArrayRenderer::render($this->links) . '</div>';
    }
}
