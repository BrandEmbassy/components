<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Sentiment;

use BrandEmbassy\Components\Color;
use BrandEmbassy\Components\Icon\Icon;
use BrandEmbassy\Components\Icon\IconType;
use BrandEmbassy\Components\UiComponent;

final class SentimentComponent implements UiComponent
{
    private const DEFAULT_PIXEL_SIZE = 16;
    private const RIGHT_PIXEL_PADDING = 4;

    /**
     * @var int
     */
    private $sentiment;

    /**
     * @var int
     */
    private $fontSizePixels;


    public function __construct(int $sentiment, int $fontSizePixels = self::DEFAULT_PIXEL_SIZE)
    {
        $this->sentiment = $sentiment;
        $this->fontSizePixels = $fontSizePixels;
    }


    public function render(): string
    {
        if ($this->sentiment === 0) {
            $type = IconType::get(IconType::RATING_3);
            $color = Color::get(Color::DEFAULT);
        } elseif ($this->sentiment > 0) {
            $type = IconType::get(IconType::RATING_2);
            $color = Color::get(Color::POSITIVE);
        } else {
            $type = IconType::get(IconType::RATING_4);
            $color = Color::get(Color::NEGATIVE);
        }

        return (new Icon($type, $color, $this->fontSizePixels, self::RIGHT_PIXEL_PADDING))->render();
    }
}
