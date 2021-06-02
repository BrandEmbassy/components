<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\UiComponent;
use Psr\Http\Message\UriInterface;

final class CellImage implements UiComponent
{
    /**
     * @var UriInterface
     */
    private $uri;

    /**
     * @var string
     */
    private $class;

    /**
     * @var string
     */
    private $width;


    public function __construct(UriInterface $uri, string $class, string $width)
    {
        $this->uri = $uri;
        $this->class = $class;
        $this->width = $width;
    }


    public function render(): string
    {
        $maxDimensions = 'width="' . $this->width . '"';

        return '<div class="img">'
            . '<img class="' . $this->class . '" src="' . (string)$this->uri
            . '" ' . $maxDimensions . '/>'
            . '</div>';
    }
}
