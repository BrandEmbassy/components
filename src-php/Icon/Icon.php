<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Icon;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\UiComponent;

final class Icon implements UiComponent
{
    private const DEFAULT_PIXEL_SIZE = 14;

    /**
     * @var IconType
     */
    private $iconType;

    /**
     * @var Color|null
     */
    private $color;

    /**
     * @var int
     */
    private $fontSizePixels;

    /**
     * @var int
     */
    private $paddingRight;


    public function __construct(
        IconType $iconType,
        ?Color $color = null,
        int $fontSizePixels = self::DEFAULT_PIXEL_SIZE,
        int $paddingRight = 0
    ) {
        $this->iconType = $iconType;
        $this->color = $color;
        $this->fontSizePixels = $fontSizePixels;
        $this->paddingRight = $paddingRight;
    }


    public function render(): string
    {
        $color = '';
        if ($this->color !== null) {
            $color = 'color: ' . $this->color->getRgbHex() . ';';
        }

        $font = '';
        if ($this->fontSizePixels !== self::DEFAULT_PIXEL_SIZE) {
            $font = 'font-size: ' . $this->fontSizePixels . 'px;';
        }

        $paddingRight = '';
        if ($this->paddingRight !== 0) {
            $paddingRight = 'padding-right: ' . $this->paddingRight . 'px;';
        }

        $styles = $color . $font . $paddingRight;
        $styleCss = $styles !== '' ? (' style="' . $styles . '"') : '';

        return '<div class="' . $this->iconType->getValue() . '"' . $styleCss . '></div>';
    }
}
