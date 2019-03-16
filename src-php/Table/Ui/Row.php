<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use Assert\Assertion;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Row implements UiComponent
{
    /**
     * @var Cell[]
     */
    private $cells;


    /**
     * @param Cell[] $cells
     */
    public function __construct(array $cells)
    {
        Assertion::allIsInstanceOf($cells, Cell::class);
        $this->cells = $cells;
    }


    public function render(): string
    {
        return '<tr>' . ArrayRenderer::render($this->cells) . '</tr>';
    }
}
