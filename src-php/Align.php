<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use MabeEnum\Enum;

final class Align extends Enum
{

    public const LEFT = 'left';
    public const CENTER = 'center';
    public const RIGHT = 'right';

    public function getStyles(): Styles
    {
        return new Styles(['text-align' => $this->getValue()]);
    }

}
