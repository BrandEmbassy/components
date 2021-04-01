<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\EnumValuesToString;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use function is_array;
use function trim;

final class GridRow implements UiComponent
{
    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var UtilitiesOption[]
     */
    private $utilityOptions;

    /**
     * @var GridRowOption[]
     */
    private $rowOptions;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param GridRowOption[] $rowOptions
     * @param UtilitiesOption[] $utilityOptions
     */
    public function __construct($children, array $rowOptions = [], array $utilityOptions = [])
    {
        $this->children = is_array($children) ? $children : [$children];
        $this->rowOptions = $rowOptions;
        $this->utilityOptions = $utilityOptions;
    }


    public function render(): string
    {
        $classes = trim(
            EnumValuesToString::transform($this->rowOptions)
            . ' ' . EnumValuesToString::transform($this->utilityOptions)
        );

        return '<div class="row ' . $classes . '">' . ArrayRenderer::render($this->children) . '</div>';
    }
}
