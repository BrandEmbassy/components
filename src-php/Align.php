<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use MabeEnum\Enum;

final class Align extends Enum
{

    public const LEFT = 'left';
    public const CENTER = 'center';
    public const RIGHT = 'right';

    public function getHtmlAttribute(): string
    {
        return ' style="text-align: ' . $this->getValue() . ';"';
    }

}
