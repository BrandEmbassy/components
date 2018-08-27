<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

use BrandEmbassy\Components\Align;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class HeaderCell implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var Align|null
     */
    private $align;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param Align|null $align
     */
    public function __construct($children, ?Align $align = null)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->align = $align;
    }

    public function render(): string
    {
        $align = $this->align ? $this->align->getHtmlAttribute() : '';

        return '<th' . $align . '>' . ArrayRenderer::render($this->children) . '</th>';
    }

}
