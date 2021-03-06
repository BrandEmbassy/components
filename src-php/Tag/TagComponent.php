<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\Rgb2Hsl;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\Styles;
use BrandEmbassy\Components\UiComponent;
use function assert;
use function hexdec;
use function sprintf;
use function str_replace;
use function strlen;
use function substr;

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
        assert(strlen($hashColor) === 6);
        $this->red = (int)hexdec(substr($hashColor, 0, 2));
        $this->green = (int)hexdec(substr($hashColor, 2, 2));
        $this->blue = (int)hexdec(substr($hashColor, 4, 2));
        $this->title = $title;
    }


    public function render(): string
    {
        [$hue, $saturation] = Rgb2Hsl::rgb2hsl($this->red, $this->green, $this->blue);

        $styles = new Styles(
            [
                'color' => sprintf('hsl(%s, %s%%, %s%%)', $hue, $saturation, 31),
                'background-color' => sprintf('hsl(%s, %s%%, %s%%)', $hue, $saturation, 92),
            ]
        );

        return '<div class="Tag__Tag"' . $styles->getHtmlAttribute() . '>'
            . StringEscaper::escapeHtml($this->title)
            . '</div>';
    }
}
