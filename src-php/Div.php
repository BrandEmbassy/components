<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use BrandEmbassy\Components\Utilities\UtilitiesOption;
use function array_shift;
use function assert;
use function count;
use function is_array;
use function sprintf;

final class Div implements UiComponent
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
     * @var string|null
     */
    private $id;


    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param UtilitiesOption[]                         $utilityOptions
     * @param UiComponent|null                          $childrenSeparator
     * @param string|null                               $id
     */
    public function __construct(
        $children,
        array $utilityOptions = [],
        ?UiComponent $childrenSeparator = null,
        ?string $id = null
    ) {
        $this->id = $id;

        $this->children = $this->getChildrenMixedWithSeparator(
            is_array($children) ? $children : [$children],
            $childrenSeparator ?? new EmptyComponent()
        );

        $this->utilityOptions = EnumValuesToString::transform($utilityOptions);
    }


    public function render(): string
    {
        $id = $this->id !== null ? 'id="' . $this->id . '" ' : '';

        return sprintf(
            '<div %s  class="%s">%s</div>',
            $id,
            $this->utilityOptions,
            ArrayRenderer::render($this->children)
        );
    }


    /**
     * @param UiComponent[]|string[] $children
     * @param UiComponent            $separator
     *
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
