<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\EnumValuesToString;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use function is_array;

class Heading implements UiComponent
{
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
    private $level;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UtilitiesOption[]                         $utilityOptions
     */
    public function __construct($children, array $utilityOptions, HeadingLevel $level)
    {
        $this->children = is_array($children) ? $children : [$children];
        $this->utilityOptions = EnumValuesToString::transform($utilityOptions);
        $this->level = $level->getValue();
    }


    public function render(): string
    {
        return '<h' . $this->level . ' class="' . $this->utilityOptions . '">'
            . ArrayRenderer::render($this->children)
            . '</h' . $this->level . '>';
    }
}
