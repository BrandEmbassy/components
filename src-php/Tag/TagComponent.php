<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\Rgb2Hsl;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\Styles;
use BrandEmbassy\Components\TagColor;
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
     * @var string
     */
    private $title;

    /**
     * @var TagColor|string
     */
    private $color;


    /**
     * @param TagColor|string $color
     */
    public function __construct($color, string $title)
    {
        if (!$color instanceof TagColor) {
            assert(strlen($color) === 7);
        }

        $this->color = $color;
        $this->title = $title;
    }


    public function render(): string
    {
        if ($this->color instanceof TagColor) {
            return $this->renderWithClass($this->color);
        }

        $color = str_replace('#', '', $this->color);
        $red = (int)hexdec(substr($color, 0, 2));
        $green = (int)hexdec(substr($color, 2, 2));
        $blue = (int)hexdec(substr($color, 4, 2));

        return $this->renderWithHslColor($red, $green, $blue);
    }


    private function renderWithClass(TagColor $tagColor): string
    {
        $class = 'Tag__Tag Tag__' . $tagColor->getValue();

        return '<div class="' . $class . '">'
            . StringEscaper::escapeHtml($this->title)
            . '</div>';
    }


    private function renderWithHslColor(int $red, int $green, int $blue): string
    {
        [$hue, $saturation] = Rgb2Hsl::rgb2hsl($red, $green, $blue);

        $styles = new Styles(
            [
                'color'            => sprintf('hsl(%s, %s%%, %s%%)', $hue, $saturation, 31),
                'background-color' => sprintf('hsl(%s, %s%%, %s%%)', $hue, $saturation, 92),
            ]
        );

        return '<div class="Tag__Tag"' . $styles->getHtmlAttribute() . '>'
            . StringEscaper::escapeHtml($this->title)
            . '</div>';
    }
}
