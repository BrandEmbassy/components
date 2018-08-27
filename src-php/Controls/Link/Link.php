<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Controls\HrefRenderer;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\UiComponent;
use Psr\Http\Message\UriInterface;

final class Link implements UiComponent
{

    /**
     * @var IconType|null
     */
    private $icon;

    /**
     * @var LinkColor|null
     */
    private $color;

    /**
     * @var UriInterface|null
     */
    private $uri;

    /**
     * @var UiComponent[]|string[] $children
     */
    private $children;

    /**
     * @var string|null
     */
    private $onclick;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UriInterface|null $uri
     * @param LinkColor|null $color
     * @param IconType|null $icon
     * @param null|string $onclick
     */
    public function __construct(
        $children,
        ?UriInterface $uri = null,
        ?LinkColor $color = null,
        ?IconType $icon = null,
        ?string $onclick = null
    ) {
        $this->icon = $icon;
        $this->color = $color;
        $this->uri = $uri;
        $this->children = \is_array($children) ? $children : [$children];
        $this->onclick = $onclick;
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color !== null && !$this->color->is(LinkColor::DEFAULT)
            ? ('__' . $this->color->getValue())
            : '';
        $uri = HrefRenderer::uriToHrefFragment($this->uri);
        $onclick = $this->onclick !== null ? (' onclick="' . $this->onclick . '"') : '';

        return '<a class="Link__Link Link' . $color . '"' . $uri . $onclick . '>'
            . $icon
            . '<div class="Link__Text">'
            . ArrayRenderer::render($this->children)
            . '</div></a>';
    }
}
