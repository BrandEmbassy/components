<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography\Lists;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

final class ListComponent implements UiComponent
{
    /**
     * @var ListItem[]
     */
    private $listItems;

    /**
     * @var ListType
     */
    private $listType;


    /**
     * @param ListItem[] $items
     */
    public function __construct(array $items, ListType $listType)
    {
        $this->listItems = $items;
        $this->listType = $listType;
    }


    public function render(): string
    {
        $listTypeValue = $this->listType->getValue();

        return sprintf('<%s>%s</%s>', $listTypeValue, ArrayRenderer::render($this->listItems), $listTypeValue);
    }
}
