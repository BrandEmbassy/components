<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\ButtonLink;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Controls\Button\Button;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\Size;
use BrandEmbassy\Components\UiComponent;
use Psr\Http\Message\UriInterface;

final class ButtonLinkAsForm implements UiComponent
{
    /**
     * @var Button
     */
    private $button;

    /**
     * @var UriInterface
     */
    private $uri;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     */
    public function __construct(
        $children,
        UriInterface $uri,
        ?Color $color = null,
        ?IconType $icon = null,
        ?Size $size = null
    ) {
        $this->button = new Button($children, $color, $icon, $size);
        $this->uri = $uri;
    }


    public function render(): string
    {
        return '<form action="' . $this->uri . '" method="post">'
            . $this->button->render()
            . '</form>';
    }
}
