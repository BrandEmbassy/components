<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\EnumValuesToString;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use function is_array;

final class Paragraph implements UiComponent
{
    public const NEW_LINE = '<br />';

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var string
     */
    private $utilityOptions;

    /**
     * @var string
     */
    private $childrenSeparator;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UtilitiesOption[]                         $utilityOptions
     * @param string                                    $childrenSeparator
     */
    public function __construct($children, array $utilityOptions = [], string $childrenSeparator = '')
    {
        $this->children = is_array($children) ? $children : [$children];
        $this->utilityOptions = EnumValuesToString::transform($utilityOptions);
        $this->childrenSeparator = $childrenSeparator;
    }


    public function render(): string
    {
        return '<p class="' . $this->utilityOptions . '">'
            . ArrayRenderer::render($this->children, $this->childrenSeparator)
            . '</p>';
    }
}
