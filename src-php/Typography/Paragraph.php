<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\EmptyComponent;
use BrandEmbassy\Components\EnumValuesToString;
use BrandEmbassy\Components\UiComponent;
use BrandEmbassy\Components\Utilities\UtilitiesOption;
use function array_shift;
use function assert;
use function count;
use function is_array;

final class Paragraph implements UiComponent
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
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UtilitiesOption[]                         $utilityOptions
     * @param UiComponent                               $childrenSeparator
     */
    public function __construct($children, array $utilityOptions = [], ?UiComponent $childrenSeparator = null)
    {
        $this->children = $this->getChildrenMixedWithSeparator(
            is_array($children) ? $children : [$children],
            $childrenSeparator ?? new EmptyComponent()
        );
        $this->utilityOptions = EnumValuesToString::transform($utilityOptions);
    }


    public function render(): string
    {
        return '<p class="' . $this->utilityOptions . '">'
            . ArrayRenderer::render($this->children)
            . '</p>';
    }


    /**
     * @param UiComponent[]|string[] $children
     * @param UiComponent            $separator
     * @return UiComponent[]|string[]
     */
    private function getChildrenMixedWithSeparator(array $children, UiComponent $separator): array
    {
        $childrenWithSeparator = [];

        while (count($children) > 0) {
            if ($childrenWithSeparator !== []) {
                $childrenWithSeparator[] = $separator;
            }

            $childToAdd = array_shift($children);
            assert($childToAdd !== null);
            $childrenWithSeparator[] = $childToAdd;
        }

        return $childrenWithSeparator;
    }
}
