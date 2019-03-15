<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class InputType extends Enum
{
    public const TEXT = 'text';
    public const NUMBER = 'number';
    public const DATE = 'date';
    public const TIME = 'time';
}
