<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class HeaderRow implements UiComponent
{

    /**
     * @var array
     */
    private $cells;

    /**
     * @param HeaderCell[] $cells
     */
    public function __construct(array $cells)
    {
        $this->cells = $cells;
    }

    public function render(): string
    {
        return '<tr>' . ArrayRenderer::render($this->cells) . '</tr>';
    }
}
