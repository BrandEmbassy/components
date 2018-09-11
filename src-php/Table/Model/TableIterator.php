<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use ArrayIterator;

final class TableIterator extends ArrayIterator
{

    public function isFirst(): bool
    {
        return $this->key() === 0;
    }

    public function isLast(): bool
    {
        return $this->key() === $this->count() - 1;
    }

}
