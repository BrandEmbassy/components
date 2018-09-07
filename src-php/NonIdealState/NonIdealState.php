<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\NonIdealState;

use BrandEmbassy\Components\Grid\GridColumn\GridColumn;
use BrandEmbassy\Components\Grid\GridColumn\GridColumnOption;
use BrandEmbassy\Components\Grid\GridRow;
use BrandEmbassy\Components\Grid\GridRowOption;
use BrandEmbassy\Components\Typography\Heading;
use BrandEmbassy\Components\Typography\HeadingLevel;
use BrandEmbassy\Components\UiComponent;

final class NonIdealState implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var string
     */
    private $heading;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param string $heading
     */
    public function __construct($children, string $heading)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->heading = $heading;
    }

    public function render(): string
    {
        $headingCol = new GridColumn(
            new Heading($this->heading, [], HeadingLevel::get(HeadingLevel::H2)),
            [GridColumnOption::get(GridColumnOption::XS_12)]
        );

        $childrenCol = new GridColumn(
            $this->children,
            [GridColumnOption::get(GridColumnOption::XS_12)]
        );

        $rowOptions = [GridRowOption::get(GridRowOption::XS_CENTER)];

        return (new GridRow([$headingCol, $childrenCol], $rowOptions))->render();
    }
}
