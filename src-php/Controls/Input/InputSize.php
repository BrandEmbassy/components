<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Input;

use MabeEnum\Enum;

final class InputSize extends Enum
{

    public const SMALL = 'small';
    public const AUTOMATIC = 'automatic';

    private const WITHOUT_MAX_SIZE = null;
    private const MAX_SIZE_FOR_SMALL_INPUT = 90;

    public function getMaxWidth(): ?int
    {
        if ($this->is(InputSize::SMALL)) {
            return self::MAX_SIZE_FOR_SMALL_INPUT;
        }

        return self::WITHOUT_MAX_SIZE;
    }

}
