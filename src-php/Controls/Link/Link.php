<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\UiComponent;

final class Link implements UiComponent
{

    public const DEFAULT = '';
    public const WHITE = 'White';
    public const BLUE = 'Blue';

    /**
     * @var string|null
     */
    private $icon;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string|null
     */
    private $color;

    public function __construct(?string $title, ?string $color, ?string $icon = null)
    {
        $this->icon = $icon;
        $this->title = $title;
        $this->color = $color;
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color !== null && $this->color !== self::DEFAULT ? ('__' . $this->color) : '';

        return '<a class="Link__Link Link' . $color . '" data-reactroot="">'
            . $icon
            . '<div class="Link__Text">'
            . $this->title
            . '</div></a>';
    }
}
