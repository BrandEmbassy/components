<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use function array_map;
use function implode;

final class ComponentRenderer
{
    public static function render(UiComponent $component): string
    {
        return $component->render();
    }


    /**
     * @param UiComponent[] $components
     */
    public static function renderMultiple(array $components): string
    {
        $rendered = array_map(
            static function ($component): string {
                return self::render($component);
            },
            $components
        );

        return implode('', $rendered);
    }
}
