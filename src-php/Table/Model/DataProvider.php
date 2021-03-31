<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use Countable;
use IteratorAggregate;

interface DataProvider extends IteratorAggregate, Countable
{
    /**
     * @return TableIterator<RowData>
     */
    public function getIterator(): TableIterator;
}
