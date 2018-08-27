<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Button;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
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
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param Color|null $color
     * @param IconType|null $icon
     */
    public function __construct($children, ?Color $color = null, ?IconType $icon = null)
    {
        $this->icon = $icon;
        $this->color = $color ?? Color::get(Color::POSITIVE);
        $this->children = \is_array($children) ? $children : [$children];
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color->is(Color::POSITIVE) ? '' : ('__' . $this->color->getValue());

        return '<button class="Button__Button' . $color . '" data-reactroot="">'
            . $icon
            . ArrayRenderer::render($this->children)
            . '</button>';
    }
}
