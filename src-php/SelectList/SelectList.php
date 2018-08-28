<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\SelectList;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

class SelectList implements UiComponent
{

    private const CSS_CLASS = 'select-list-654d';

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     */
    public function __construct(array $children)
    {
        $this->children = $children;
    }

    public function render(): string
    {
        return \sprintf(
            '<div class="%s">%s</div>',
            self::CSS_CLASS,
            ArrayRenderer::render($this->children)
        );
    }

}
