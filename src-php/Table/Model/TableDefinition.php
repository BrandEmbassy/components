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
     * @var TableRowDivider|null
     */
    private $tableRowDivider;


    /**
     * @param ColumnDefinition[] $columnDefinitions
     */
    public function __construct(array $columnDefinitions)
    {
        Assertion::allIsInstanceOf($columnDefinitions, ColumnDefinition::class);
        $this->columnDefinitions = $columnDefinitions;
    }


    public function setRowDivider(TableRowDivider $tableRowDivider): void
    {
        $this->tableRowDivider = $tableRowDivider;
    }


    /**
     * @return ColumnDefinition[]
     */
    public function getColumnDefinitions(): array
    {
        return $this->columnDefinitions;
    }


    public function getRowDivider(): ?TableRowDivider
    {
        return $this->tableRowDivider;
    }
}
