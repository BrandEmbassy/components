<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Model;

use ArrayIterator;
use Assert\Assertion;
use Iterator;

final class ArrayDataProvider implements DataProvider
{

    /**
     * @var RowData[]
     */
    private $data;

    /**
     * Example of the array:
     *
     * [
     *     new RowData([new CellData('name', 'John'), new CellData('surname', 'Smith')]),
     *     new RowData([new CellData('name', 'Harry'), new CellData('surname', 'Potter')]),
     * ];
     *
     * @param RowData[] $data
     */
    public function __construct(array $data)
    {
        Assertion::allIsInstanceOf($data, RowData::class);
        $this->data = $data;
    }

    public function getIterator(): Iterator
    {
        return new ArrayIterator($this->data);
    }

}
