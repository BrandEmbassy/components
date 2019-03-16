<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class SelectboxType extends Enum
{
    public const NORMAL = 'normal';
    public const WIDE = 'wide';
}
