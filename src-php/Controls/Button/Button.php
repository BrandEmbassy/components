<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Button;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\UiComponent;

final class Button implements UiComponent
{

    /**
     * @var string
     */
    private $title;

    /**
     * @var Color|null
     */
    private $color;

    /**
     * @var IconType|null
     */
    private $icon;

    public function __construct(string $title, ?Color $color = null, ?IconType $icon = null)
    {
        $this->title = $title;
        $this->icon = $icon;
        $this->color = $color ?? Color::get(Color::POSITIVE);
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color->is(Color::POSITIVE) ? '' : ('__' . $this->color->getValue());

        return '<button class="Button__Button' . $color . '" data-reactroot="">'
            . $icon
            . $this->title
            . '</button>';
    }
}
