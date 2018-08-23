<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Ui;

use BrandEmbassy\Components\UiComponent;

final class HeaderCell implements UiComponent
{

    /**
     * @var string
     */
    private $value;

    public function __construct(string $value)
    {
        $this->value = $value;
    }

    public function render(): string
    {
        return '<th>' . $this->value . '</th>';
    }

}
