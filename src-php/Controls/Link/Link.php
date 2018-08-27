<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\ArrayRenderer;
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
    private $url;

    /**
     * @var UiComponent[]|string[] $children
     */
    private $children;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UriInterface|null $url
     * @param LinkColor|null $color
     * @param IconType|null $icon
     */
    public function __construct($children, ?UriInterface $url = null, ?LinkColor $color = null, ?IconType $icon = null)
    {
        $this->icon = $icon;
        $this->color = $color;
        $this->url = $url;
        $this->children = \is_array($children) ? $children : [$children];
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color !== null && !$this->color->is(LinkColor::DEFAULT)
            ? ('__' . $this->color->getValue())
            : '';
        $url = $this->url !== null ? (' href="' . $this->urlToString($this->url) . '"') : '';

        return '<a class="Link__Link Link' . $color . '"' . $url . ' data-reactroot="">'
            . $icon
            . '<div class="Link__Text">'
            . ArrayRenderer::render($this->children)
            . '</div></a>';
    }

    private function urlToString(UriInterface $url): string
    {
        $scheme = $url->getScheme();
        $authority = $url->getAuthority();
        $path = $url->getPath();
        $query = $url->getQuery();
        $fragment = $url->getFragment();

        $uri = '';

        if ($scheme !== '') {
            $uri .= $scheme . ':';
        }

        if ($authority !== '' || $scheme === 'file') {
            $uri .= '//' . $authority;
        }

        $uri .= $path;

        if ($query !== '') {
            $uri .= '?' . $query;
        }

        if ($fragment !== '') {
            $uri .= '#' . $fragment;
        }

        return $uri;
    }
}
