<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use MabeEnum\Enum;
use function array_map;
use function assert;
use function implode;
use function is_int;
use function is_string;

final class EnumValuesToString
{
    /**
     * @param Enum[] $options
     * @return string
     */
    public static function transform(array $options): string
    {
        $optionsAsString = array_map(
            static function (Enum $option): string {
                $value = $option->getValue();
                assert(is_string($value) || is_int($value));

                return (string)$value;
            },
            $options
        );

        return implode(' ', $optionsAsString);
    }
}
