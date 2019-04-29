<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use function array_map;
use function implode;

final class ArrayRenderer
{
    /**
     * @param UiComponent[]|string[] $components
     * @return string
     */
    public static function render(array $components): string
    {
        $rendered = array_map(
            static function ($component): string {
                if ($component instanceof UiComponent) {
                    return $component->render();
                }

                return StringEscaper::escapeHtml($component);
            },
            $components
        );

        return implode('', $rendered);
    }
}
