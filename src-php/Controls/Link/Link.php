<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Controls\UriRenderer;
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
     * @var LinkTarget
     */
    private $target;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UriInterface|null $uri
     * @param LinkColor|null $color
     * @param IconType|null $icon
     * @param null|string $onclick
     * @param LinkTarget|null $target
     */
    public function __construct(
        $children,
        ?UriInterface $uri = null,
        ?LinkColor $color = null,
        ?IconType $icon = null,
        ?string $onclick = null,
        ?LinkTarget $target = null
    ) {
        $this->icon = $icon;
        $this->color = $color;
        $this->uri = $uri;
        $this->children = \is_array($children) ? $children : [$children];
        $this->onclick = $onclick;
        $this->target = $target ?: LinkTarget::get(LinkTarget::CURRENT_CONTEXT);
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color !== null && !$this->color->is(LinkColor::DEFAULT)
            ? ('__' . $this->color->getValue())
            : '';
        $uri = UriRenderer::uriToHrefFragment($this->uri);
        $onclick = $this->onclick !== null ? (' onclick="' . $this->onclick . '"') : '';
        $target = $this->target->is(LinkTarget::CURRENT_CONTEXT) ? '' : (' target="' . $this->target->getValue() . '"');

        return '<a class="Link__Link Link' . $color . '"' . $uri . $onclick . $target . '>'
            . $icon
            . '<span class="Link__Text">'
            . ArrayRenderer::render($this->children)
            . '</span></a>';
    }

}
