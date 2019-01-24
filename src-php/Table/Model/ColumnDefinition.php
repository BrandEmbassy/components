<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use BrandEmbassy\Components\Align;

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

    /**
     * @var Align|null
     */
    private $align;

    /**
     * @var string
     */
    private $width;

    public function __construct(string $key, string $headerLabel, ?Align $align = null, string $width = '')
    {
        $this->key = $key;
        $this->headerLabel = $headerLabel;
        $this->align = $align;
        $this->width = $width;
    }

    public function getKey(): string
    {
        return $this->key;
    }

    public function getHeaderLabel(): string
    {
        return $this->headerLabel;
    }

    public function getAlign(): ?Align
    {
        return $this->align;
    }

    public function getWidth(): string
    {
        return $this->width;
    }

}
