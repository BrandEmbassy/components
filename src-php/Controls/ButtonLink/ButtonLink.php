<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\ButtonLink;

use function Assert\thatAll;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Controls\HrefRenderer;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\Size;
use BrandEmbassy\Components\UiComponent;
use Psr\Http\Message\UriInterface;

final class ButtonLink implements UiComponent
{

    /**
     * @var Color
     */
    private $color;

    /**
     * @var IconType|null
     */
    private $icon;

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var Size
     */
    private $size;

    /**
     * @var UriInterface|null
     */
    private $uri;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param Color|null $color
     * @param IconType|null $icon
     * @param Size|null $size
     * @param UriInterface|null $uri Only accepted if $asHypertextLink === true
     */
    public function __construct(
        $children,
        ?Color $color = null,
        ?IconType $icon = null,
        ?Size $size = null,
        ?UriInterface $uri = null
    ) {
        $this->children = \is_array($children) ? $children : [$children];
        $this->icon = $icon;
        $this->color = $color ?? Color::get(Color::POSITIVE);
        $this->size = $size ?? Size::get(Size::DEFAULT);
        $this->uri = $uri;
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color->is(Color::POSITIVE) ? '' : (' Button__' . $this->color->getValue());
        $size = $this->size->is(Size::DEFAULT) ? '' : (' Button__' . $this->size->getValue());
        $uri = HrefRenderer::uriToHrefFragment($this->uri);

        return '<a class="Button__Button' . $color . $size . '"' . $uri . '>'
            . $icon
            . ArrayRenderer::render($this->children)
            . '</a>';
    }
}
