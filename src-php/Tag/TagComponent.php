<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\Rgb2Hsl;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class TagComponent implements UiComponent
{

    /**
     * @var int
     */
    private $red;

    /**
     * @var int
     */
    private $green;

    /**
     * @var int
     */
    private $blue;

    /**
     * @var string
     */
    private $title;

    public function __construct(string $hashColor, string $title)
    {
        $hashColor = str_replace('#', '', $hashColor);
        \assert(\strlen($hashColor) === 6);
        $this->red = (int)\hexdec(substr($hashColor, 0, 2));
        $this->green = (int)\hexdec(substr($hashColor, 2, 2));
        $this->blue = (int)\hexdec(substr($hashColor, 4, 2));
        $this->title = $title;
    }

    public function render(): string
    {
        [$hue, $saturation] = Rgb2Hsl::rgb2hsl($this->red, $this->green, $this->blue);
        $color = \sprintf('color: hsl(%s, %s%%, %s%%);', $hue, $saturation, 31);
        $background = \sprintf('background-color: hsl(%s, %s%%, %s%%);', $hue, $saturation, 92);

        return '<div class="Tag__Tag" style="' . $background . $color . ';">'
            . StringEscaper::escapeHtml($this->title)
            . '</div>';
    }
}
