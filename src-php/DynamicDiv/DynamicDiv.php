<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\DynamicDiv;

use BrandEmbassy\Components\ComponentRenderer;
use BrandEmbassy\Components\Styles;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

final class DynamicDiv implements UiComponent
{
    /**
     * @var UiComponent[]
     */
    private $children;

    /**
     * @var Styles
     */
    private $styles;

    /**
     * @var string|null
     */
    private $id;


    /**
     * @param UiComponent[] $children
     */
    public function __construct(array $children, Styles $styles, ?string $id = null)
    {
        $this->children = $children;
        $this->styles = $styles;
        $this->id = $id;
    }


    public function render(): string
    {
        $id = $this->id !== null ? ' id="' . $this->id . '"' : '';

        return sprintf(
            '<div%s%s>%s</div>',
            $id,
            $this->styles->getHtmlAttribute(),
            ComponentRenderer::renderMultiple($this->children)
        );
    }
}
