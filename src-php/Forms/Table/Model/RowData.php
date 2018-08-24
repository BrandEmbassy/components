<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Model;

final class RowData
{

    /**
     * @var CellData[]
     */
    private $cellsData;

    /**
     * @var string
     */
    private $rowIdentifier;

    /**
     * @param string $rowIdentifier
     * @param CellData[] $cellsData
     */
    public function __construct(string $rowIdentifier, array $cellsData)
    {
        $this->rowIdentifier = $rowIdentifier;
        $this->cellsData = $cellsData;
    }

    /**
     * @return CellData[]
     */
    public function getCellsData(): array
    {
        return $this->cellsData;
    }

    public function getRowIdentifier(): string
    {
        return $this->rowIdentifier;
    }

}
