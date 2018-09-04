<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Breadcrumbs;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class Step implements UiComponent
{

    /**
     * @var string
     */
    private $text;

    public function __construct(string $text)
    {
        $this->text = $text;
    }

    public function render(): string
    {
        return '<div class="Breadcrumbs__Step">' . StringEscaper::makeSafe($this->text) . '</div>';
    }
}
