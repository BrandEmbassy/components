<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use Assert\Assertion;
use function count;

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


    /**
     * @return TableIterator<RowData>
     */
    public function getIterator(): TableIterator
    {
        return new TableIterator($this->data);
    }


    public function count(): int
    {
        return count($this->data);
    }
}
