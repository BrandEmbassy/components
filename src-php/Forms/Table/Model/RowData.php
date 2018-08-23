<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Model;

final class RowData
{

    /**
     * @var CellData[]
     */
    private $cellsData;

    /**
     * @param CellData[] $cellsData
     */
    public function __construct(array $cellsData)
    {
        $this->cellsData = $cellsData;
    }

    /**
     * @return CellData[]
     */
    public function getCellsData(): array
    {
        return $this->cellsData;
    }

}
