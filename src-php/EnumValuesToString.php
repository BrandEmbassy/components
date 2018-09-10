<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use MabeEnum\Enum;

final class EnumValuesToString
{
    /**
     * @param Enum[] $options
     * @return string
     */
    public static function transform(array $options): string
    {
        $optionsAsString = \array_map(
            function (Enum $option): string {
                return (string)$option->getValue();
            },
            $options
        );

        return \implode(' ', $optionsAsString);
    }

}
