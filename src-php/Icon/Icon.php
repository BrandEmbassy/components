<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Icon;

use BrandEmbassy\Components\UiComponent;

final class Icon implements UiComponent
{

    /**
     * @var IconType
     */
    private $iconType;

    public function __construct(IconType $iconType)
    {
        $this->iconType = $iconType;

    }

    public function render(): string
    {
        return '<div class="' . $this->iconType->getValue() . '"></div>';
    }
}
