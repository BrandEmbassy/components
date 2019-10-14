<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

final class TableRowDivider
{
    /**
     * @var TableRowDividerStyle
     */
    private $style;

    /**
     * @var string
     */
    private $label;


    public function __construct(TableRowDividerStyle $style, string $label = '')
    {
        $this->style = $style;
        $this->label = $label;
    }


    public function getStyle(): TableRowDividerStyle
    {
        return $this->style;
    }


    public function getLabel(): string
    {
        return $this->label;
    }
}
