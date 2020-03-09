<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography\Lists;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class ListType extends Enum
{
    public const ORDERED = 'ol';
    public const UNORDERED = 'ul';
    public const DESCRIPTION_LIST = 'dl';
}
