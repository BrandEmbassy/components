<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use MabeEnum\Enum;
use function array_key_exists;

/**
 * @method string getValue()
 */
final class Color extends Enum
{
    public const POSITIVE = 'Green';
    public const NEGATIVE = 'Negative';
    public const DISABLED = 'Disabled';
    public const NEUTRAL = 'Neutral';
    public const DEFAULT = 'Default';

    private const COLOR_MAP = [
        self::POSITIVE => '#329d53',
        self::NEGATIVE => '#E8585D',
        self::DISABLED => '#cfcfcf',
        self::DEFAULT  => '#000000',
    ];


    public function getRgbHex(): string
    {
        $value = $this->getValue();

        if (array_key_exists($value, self::COLOR_MAP)) {
            return self::COLOR_MAP[$value];
        }

        return '#000000';
    }
}
