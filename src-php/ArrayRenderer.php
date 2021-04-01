<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use BrandEmbassy\Components\Text\UiString;
use function array_map;

/**
 * @deprecated use ComponentRenderer instead
 */
final class ArrayRenderer
{
    /**
     * @param UiComponent[]|string[] $components
     */
    public static function render(array $components): string
    {
        $uiComponents = array_map(
            static function ($component): UiComponent {
                if (!$component instanceof UiComponent) {
                    return new UiString($component);
                }

                return $component;
            },
            $components
        );

        return ComponentRenderer::renderMultiple($uiComponents);
    }
}
