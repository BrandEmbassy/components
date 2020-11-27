<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\Styles;
use BrandEmbassy\Components\Table\Model\ColumnDefinition;
use BrandEmbassy\Components\UiComponent;
use function is_array;

final class HeaderCell implements UiComponent
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
     * @param ColumnDefinition                          $columnDefinition
     */
    public function __construct($children, ColumnDefinition $columnDefinition)
    {
        $this->children = is_array($children) ? $children : [$children];
        $this->columnDefinition = $columnDefinition;
    }


    public function render(): string
    {
        $width = $this->columnDefinition->getWidth();
        $styles = new Styles($width !== '' ? ['width' => $width, 'max-width' => $width] : []);

        $align = $this->columnDefinition->getAlign();
        if ($align !== null) {
            $styles = $styles->merge($align->getStyles());
        }

        return '<th' . $styles->getHtmlAttribute() . '>' . ArrayRenderer::render($this->children) . '</th>';
    }
}
