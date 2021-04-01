<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography\Lists;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

final class ListItem implements UiComponent
{
    /**
     * @var UiComponent|string
     */
    private $value;

    /**
     * @var ListItemType
     */
    private $listItemType;


    /**
     * @param UiComponent|string $value
     */
    public function __construct($value, ListItemType $listItemType)
    {
        $this->value = $value;
        $this->listItemType = $listItemType;
    }


    public function render(): string
    {
        $listItemTypeValue = $this->listItemType->getValue();

        return sprintf(
            '<%s>%s</%s>',
            $listItemTypeValue,
            ArrayRenderer::render([$this->value]),
            $listItemTypeValue
        );
    }
}
