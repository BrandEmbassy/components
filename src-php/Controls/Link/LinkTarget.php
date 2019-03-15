<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Link;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class LinkTarget extends Enum
{
    public const CURRENT_CONTEXT = '';
    public const BLANK = '_blank';
}
