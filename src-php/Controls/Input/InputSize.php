<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class InputSize extends Enum
{
    public const SMALL = 'small';
    public const MIDDLE = 'middle';
    public const AUTOMATIC = 'automatic';

    private const WITHOUT_MAX_SIZE = null;

    private const MAX_SIZE = [
        self::SMALL  => 90,
        self::MIDDLE => 150,
    ];


    public function getMaxWidth(): ?int
    {
        return self::MAX_SIZE[$this->getValue()] ?? self::WITHOUT_MAX_SIZE;
    }
}
