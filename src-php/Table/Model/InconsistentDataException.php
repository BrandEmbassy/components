<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use RuntimeException;

final class InconsistentDataException extends RuntimeException
{

    public static function byCoordinates(string $columnKey, string $rowIdentifier): self
    {
        return new self(
            \sprintf('Column "%s" was not found in data provider at row "%s".', $columnKey, $rowIdentifier)
        );
    }

}
