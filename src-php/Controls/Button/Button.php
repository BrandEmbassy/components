<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Button;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\Size;
use BrandEmbassy\Components\UiComponent;

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
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param Color|null $color
     * @param IconType|null $icon
     * @param Size|null $size
     */
    public function __construct($children, ?Color $color = null, ?IconType $icon = null, ?Size $size = null)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->icon = $icon;
        $this->color = $color ?? Color::get(Color::POSITIVE);
        $this->size = $size ?? Size::get(Size::DEFAULT);
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color->is(Color::POSITIVE) ? '' : (' Button__' . $this->color->getValue());
        $size = $this->size->is(Size::DEFAULT) ? '' : (' Button__' . $this->size->getValue());

        return '<button class="Button__Button' . $color . $size . '" data-reactroot="">'
            . $icon
            . ArrayRenderer::render($this->children)
            . '</button>';
    }
}
