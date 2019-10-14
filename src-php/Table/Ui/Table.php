<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\Table\Model\CellData;
use BrandEmbassy\Components\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\Table\Model\DataProvider;
use BrandEmbassy\Components\Table\Model\InconsistentDataException;
use BrandEmbassy\Components\Table\Model\RowData;
use BrandEmbassy\Components\Table\Model\TableDefinition;
use BrandEmbassy\Components\Table\Model\TableIterator;
use BrandEmbassy\Components\UiComponent;
use LogicException;
use function array_map;
use function assert;
use function count;
use function gettype;
use function in_array;
use function is_int;
use function is_string;
use function sprintf;

final class Table implements UiComponent
{
    /**
     * @var TableDefinition
     */
    private $tableDefinition;

    /**
     * @var DataProvider
     */
    private $dataProvider;

    /**
     * @var           (callable(CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition, TableIterator $iterator): Cell)[]
     * @phpcsSuppress SlevomatCodingStandard.TypeHints.TypeHintDeclaration.MissingTraversablePropertyTypeHintSpecification
     */
    private $cellRenderCallbacks;

    /**
     * @var string[]
     */
    private $columnsNotInDataSet = [];

    /**
     * @var bool
     */
    private $hasHover;


    public function __construct(TableDefinition $tableDefinition, DataProvider $dataProvider, bool $hasHover = false)
    {
        $this->tableDefinition = $tableDefinition;
        $this->dataProvider = $dataProvider;
        $this->hasHover = $hasHover;
    }


    /**
     * @param string            $column
     * @param callable(CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition): Cell $function
     */
    public function setCellRenderCallback(string $column, callable $function): void
    {
        $this->cellRenderCallbacks[$column] = $function;
    }


    public function render(): string
    {
        $tableClass = 'Table__Table Table__isStriped';

        if ($this->hasHover) {
            $tableClass .= ' Table__hasRowHover';
        }

        $result = '';
        if ($this->tableDefinition->getRowDivider() !== null) {
            $result .= $this->renderRowDividerStyles();
        }
        $result .= '<div class="' . $tableClass . '"><table>';
        $result .= $this->renderHead();
        $result .= $this->renderBody();
        $result .= '</table></div>';

        return $result;
    }


    private function renderHead(): string
    {
        $headerCells = array_map(
            static function (ColumnDefinition $columnDefinition): HeaderCell {
                return new HeaderCell($columnDefinition->getHeaderLabel(), $columnDefinition->getAlign());
            },
            $this->tableDefinition->getColumnDefinitions()
        );

        return '<thead>' . (new HeaderRow($headerCells))->render() . '</thead>';
    }


    private function renderBody(): string
    {
        $tableRowDivider = $this->tableDefinition->getRowDivider();
        $result = '<tbody>';
        $iterator = $this->dataProvider->getIterator();
        foreach ($iterator as $rowData) {
            assert($rowData instanceof RowData);
            $cellsData = $rowData->getCellsData();

            /** @var Cell[] $cells */
            $cells = [];
            foreach ($this->tableDefinition->getColumnDefinitions() as $columnDefinition) {
                $columnKey = $columnDefinition->getKey();
                $renderFunction = $this->getCellRenderFunction($columnDefinition->getKey());

                if (in_array($columnKey, $this->columnsNotInDataSet, true)) {
                    $cells[] = $renderFunction(new CellData($columnKey, ''), $rowData, $columnDefinition, $iterator);
                } elseif (isset($cellsData[$columnKey])) {
                    $cells[] = $renderFunction($cellsData[$columnKey], $rowData, $columnDefinition, $iterator);
                } else {
                    throw InconsistentDataException::byCoordinates($columnKey, $rowData->getRowIdentifier());
                }
            }
            $result .= (new Row($cells))->render();

            if ($tableRowDivider !== null && !$iterator->isLast()) {
                $tableRowDividerRenderer = new TableRowDividerRenderer(
                    $tableRowDivider,
                    count($this->tableDefinition->getColumnDefinitions())
                );
                $result .= $tableRowDividerRenderer->render();
            }
        }
        $result .= '</tbody>';

        return $result;
    }


    /**
     * @param string $key
     *
     * @return callable(CellData $cellData, RowData $rowData, ColumnDefinition $columnDefinition, TableIterator $iterator): Cell
     */
    private function getCellRenderFunction(string $key): callable
    {
        if (isset($this->cellRenderCallbacks[$key])) {
            return $this->cellRenderCallbacks[$key];
        }

        return function (
            CellData $cellData,
            RowData $rowData,
            ColumnDefinition $columnDefinition,
            TableIterator $iterator
        ): Cell {
            $value = $cellData->getValue();
            if (is_int($value)) {
                $value = (string)$value;
            }

            if (!is_string($value)) {
                $errorMessage = sprintf(
                    'Default cell render function can only render string/int values but "%s" given. '
                    . 'If you want to render other types, register your own render function via: '
                    . 'setCellRenderCallback() method',
                    gettype($value)
                );

                throw new LogicException($errorMessage);
            }

            return new Cell($value, $columnDefinition);
        };
    }


    /**
     * @deprecated Due to difficulties with deployment to https://components.brandembassy.com/2.0/css/components.css.
     *             I must give style directly here; once "components.css" will be regenerated, this may disappear.
     * @return string
     */
    private function renderRowDividerStyles(): string
    {
        return <<<STYLE
<style type="text/css">

div.TableRowDivider:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 40px;
    height: 1px;
    right: -45px;
    background: #b7b7b7;
}

div.TableRowDivider:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40px;
    height: 1px;
    left: -45px;
    background: #b7b7b7;
}

tr.TableRowDivider {
	background: linear-gradient(0deg, #FAFAFA 50%, #FFFFFF 50%);
}
tr.TableRowDivider:nth-child(even) {
	background: linear-gradient(0deg, #FFFFFF 50%, #FAFAFA 50%);
}	
</style>
STYLE;
    }


    /**
     * @param string[] $columnsNotInDataSet
     */
    public function setColumnsNotInDataSet(array $columnsNotInDataSet): void
    {
        $this->columnsNotInDataSet = $columnsNotInDataSet;
    }
}
