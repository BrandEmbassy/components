<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use Assert\Assertion;

final class TableDefinition
{
    /**
     * @var ColumnDefinition[]
     */
    private $columnDefinitions;


    /**
     * @param ColumnDefinition[] $columnDefinitions
     */
    public function __construct(array $columnDefinitions)
    {
        Assertion::allIsInstanceOf($columnDefinitions, ColumnDefinition::class);
        $this->columnDefinitions = $columnDefinitions;
    }


    /**
     * @return ColumnDefinition[]
     */
    public function getColumnDefinitions(): array
    {
        return $this->columnDefinitions;
    }
}
