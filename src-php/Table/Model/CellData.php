<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use BrandEmbassy\Components\UiComponent;

final class CellData
{

    /**
     * @var string
     */
    private $key;

    /**
     * @var UiComponent|string
     */
    private $value;

    public function __construct(string $key, $value)
    {
        $this->key = $key;
        $this->value = $value;
    }

    public function getKey(): string
    {
        return $this->key;
    }

    /**
     * @return UiComponent|string
     */
    public function getValue()
    {
        return $this->value;
    }

}
