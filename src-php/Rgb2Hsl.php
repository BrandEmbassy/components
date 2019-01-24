<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

final class Rgb2Hsl
{

    /**
     * @param int $red
     * @param int $green
     * @param int $blue
     * @return int[]
     */
    public static function rgb2hsl(int $red, int $green, int $blue): array
    {
        $red /= 255;
        $green /= 255;
        $blue /= 255;
        $max = max($red, $green, $blue);
        $min = min($red, $green, $blue);
        $luminosity = ($max + $min) / 2;
        if ($max === $min) {
            $hue = $saturation = 0;
        } else {
            $distance = $max - $min;
            $saturation = $luminosity > 0.5 ? $distance / (2 - $max - $min) : $distance / ($max + $min);
            switch ($max) {
                case $red:
                    $hue = ($green - $blue) / $distance + ($green < $blue ? 6 : 0);
                    break;
                case $green:
                    $hue = ($blue - $red) / $distance + 2;
                    break;
                case $blue:
                    $hue = ($red - $green) / $distance + 4;
                    break;
                default:
                    $hue = 0;
            }
            $hue /= 6;
        }
        $hue = (int)floor($hue * 360);
        $saturation = (int)floor($saturation * 100);
        $luminosity = (int)floor($luminosity * 100);

        return [$hue, $saturation, $luminosity];
    }
}
