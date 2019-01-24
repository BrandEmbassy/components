<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\Align;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\UiComponent;

final class Cell implements UiComponent
{

    /**
     * @var UiComponent[]|string[]
     */
    private $children;

    /**
     * @var ColumnDefinition
     */
    private $columnDefinition;

    /**
     * @param UiComponent[]|string[]|UiComponent|string $children
     * @param ColumnDefinition $columnDefinition
     */
    public function __construct($children, ColumnDefinition $columnDefinition)
    {
        $this->children = \is_array($children) ? $children : [$children];
        $this->columnDefinition = $columnDefinition;
    }

    public function render(): string
    {
        $align = $this->columnDefinition->getAlign();
        $styles = $align ? $align->getStyles()->getHtmlAttribute() : '';

        return '<td' . $styles . '>' . ArrayRenderer::render($this->children) . '</td>';
    }

}
