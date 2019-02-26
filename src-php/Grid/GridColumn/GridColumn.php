<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid\GridColumn;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\EnumValuesToString;
use BrandEmbassy\Components\Styles;
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
     * @var Styles|null
     */
    private $styles;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param GridColumnOption[] $columnOptions
     * @param UtilitiesOption[] $utilityOptions
     * @param Styles|null $styles
     */
    public function __construct($children, array $columnOptions, array $utilityOptions = [], ?Styles $styles = null)
    {
        \assert(\count($columnOptions) > 0);

        $this->children = \is_array($children) ? $children : [$children];
        $this->columnOptions = EnumValuesToString::transform($columnOptions);
        $this->utilityOptions = EnumValuesToString::transform($utilityOptions);
        $this->styles = $styles ?? new Styles([]);
    }

    public function render(): string
    {
        $options = $this->utilityOptions . ' ' . $this->columnOptions;

        return \sprintf(
            '<div class="%s"%s>%s</div>',
            $options,
            $this->styles->getHtmlAttribute(),
            ArrayRenderer::render($this->children)
        );
    }

}
