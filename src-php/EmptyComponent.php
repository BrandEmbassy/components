<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

final class EmptyComponent implements UiComponent
{

    public function render(): string
    {
        return '';
    }

}
