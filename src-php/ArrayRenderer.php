<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

final class ArrayRenderer
{

    public static function render(array $components): string
    {
        $rendered = \array_map(
            function (UiComponent $Component): string {
                return $Component->render();
            },
            $components
        );

        $reduced = \array_reduce(
            $rendered,
            function (string $carry, string $item): string {
                return $carry . $item;
            },
            ''
        );

        return $reduced;
    }

}
