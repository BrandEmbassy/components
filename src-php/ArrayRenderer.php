<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

final class ArrayRenderer
{

    /**
     * @param UiComponent[]|string[] $components
     * @return string
     */
    public static function render(array $components): string
    {
        $rendered = \array_map(
            function ($component): string {
                if ($component instanceof UiComponent) {
                    return $component->render();
                }

                return \htmlspecialchars($component);
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
