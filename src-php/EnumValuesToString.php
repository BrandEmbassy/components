<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use MabeEnum\Enum;
use Nette\StaticClass;

final class EnumValuesToString
{
    use StaticClass;

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
