<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\UiComponent;

final class NewLine implements UiComponent
{
    public function render(): string
    {
        return '<br />';
    }
}
