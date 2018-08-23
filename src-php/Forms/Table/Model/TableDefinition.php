<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Model;

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
