<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography\Lists;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class ListItemType extends Enum
{
    public const LIST_ITEM = 'li';
    public const TERM_DEFINITION = 'dt';
    public const TERM_DESCRIPTION = 'dd';
}
