<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\EnumValuesToString;
use BrandEmbassy\Components\Grid\Options\GridColumnOption;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Utilities\UtilitiesOption;

final class GridColumn implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var string
     */
    private $columnOptions;

    /**
     * @var string
     */
    private $utilityOptions;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param GridColumnOption[] $columnOptions
     * @param UtilitiesOption[] $utilityOptions
     */
    public function __construct($children, array $columnOptions, array $utilityOptions = [])
    {
        \assert(\count($columnOptions) > 0);

        $this->children = \is_array($children) ? $children : [$children];
        $this->columnOptions = EnumValuesToString::transform($columnOptions);
        $this->utilityOptions = EnumValuesToString::transform($utilityOptions);
    }

    public function render(): string
    {
        $options = $this->utilityOptions . ' ' . $this->columnOptions;

        return '<div class="' . $options . '">' . ArrayRenderer::render($this->children) . '</div>';
    }

}
