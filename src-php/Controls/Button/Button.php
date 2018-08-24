<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Button;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\UiComponent;

final class Button implements UiComponent
{

    /**
     * @var string
     */
    private $title;

    /**
     * @var string|null
     */
    private $color;

    /**
     * @var string|null
     */
    private $icon;

    public function __construct(string $title, ?string $color = Color::POSITIVE, ?string $icon = null)
    {
        $this->icon = $icon;
        $this->color = $color;
        $this->title = $title;
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color === Color::POSITIVE ? '' : ('__' . $this->color);

        return '<button class="Button__Button' . $color . '" data-reactroot="">' . $icon .  $this->title . '</button>';
    }
}
