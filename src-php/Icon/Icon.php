<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Icon;

use BrandEmbassy\Components\UiComponent;

final class Icon implements UiComponent
{

    /**
     * @var string
     */
    private $class;

    public function __construct(string $class)
    {
        $this->class = $class;

    }

    public function render(): string
    {
        return '<div class="' . $this->class . '"></div>';
    }
}
