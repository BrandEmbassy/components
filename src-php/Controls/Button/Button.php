<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Button;

use function Assert\thatAll;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Controls\HrefRenderer;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\Size;
use BrandEmbassy\Components\UiComponent;
use Psr\Http\Message\UriInterface;

final class Button implements UiComponent
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
     * @var bool
     */
    private $asHypertextLink;

    /**
     * @var UriInterface|null
     */
    private $uri;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param Color|null $color
     * @param IconType|null $icon
     * @param Size|null $size
     * @param bool $asHypertextLink
     * @param UriInterface|null $uri Only accepted if $asHypertextLink === true
     */
    public function __construct(
        $children,
        ?Color $color = null,
        ?IconType $icon = null,
        ?Size $size = null,
        bool $asHypertextLink = false,
        ?UriInterface $uri = null
    ) {
        $this->children = \is_array($children) ? $children : [$children];
        $this->icon = $icon;
        $this->color = $color ?? Color::get(Color::POSITIVE);
        $this->size = $size ?? Size::get(Size::DEFAULT);
        $this->asHypertextLink = $asHypertextLink;
        if (!$asHypertextLink && $uri !== null) {
            throw new \LogicException('Uri can be specified only if $asHypertextLink === true.');
        }
        $this->uri = $uri;
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color->is(Color::POSITIVE) ? '' : (' Button__' . $this->color->getValue());
        $size = $this->size->is(Size::DEFAULT) ? '' : (' Button__' . $this->size->getValue());
        $uri = HrefRenderer::uriToHrefFragment($this->uri);
        $tag = $this->asHypertextLink ? 'a' : 'button';

        return '<' . $tag . ' class="Button__Button' . $color . $size . '"' . $uri . '>'
            . $icon
            . ArrayRenderer::render($this->children)
            . '</' . $tag . '>';
    }
}
