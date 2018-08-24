<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\UiComponent;

final class Link implements UiComponent
{

    /**
     * @var IconType|null
     */
    private $icon;

    /**
     * @var string|null
     */
    private $title;

    /**
     * @var LinkColor|null
     */
    private $color;

    /**
     * @var string|null
     */
    private $url;

    public function __construct(?string $title, ?string $url = null, ?LinkColor $color = null, ?IconType $icon = null)
    {
        $this->icon = $icon;
        $this->title = $title;
        $this->color = $color;
        $this->url = $url;
    }

    public function render(): string
    {
        $icon = $this->icon !== null ? (new Icon($this->icon))->render() : '';
        $color = $this->color !== null && !$this->color->is(LinkColor::DEFAULT)
            ? ('__' . $this->color->getValue())
            : '';
        $url = $this->url !== null ? (' href="' . $this->url . '"') : '';

        return '<a class="Link__Link Link' . $color . '"' . $url . ' data-reactroot="">'
            . $icon
            . '<div class="Link__Text">'
            . $this->title
            . '</div></a>';
    }
}
