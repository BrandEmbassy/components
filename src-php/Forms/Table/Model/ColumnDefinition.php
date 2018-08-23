<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Forms\Table\Model;

final class ColumnDefinition
{

    /**
     * @var string
     */
    private $key;

    /**
     * @var string
     */
    private $headerLabel;

    public function __construct(string $key, string $headerLabel)
    {
        $this->key = $key;
        $this->headerLabel = $headerLabel;
    }

    public function getKey(): string
    {
        return $this->key;
    }

    public function getHeaderLabel(): string
    {
        return $this->headerLabel;
    }

}
