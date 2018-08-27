<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Breadcrumbs;

use Assert\Assert;
use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Breadcrumbs implements UiComponent
{

    /**
     * @var string[]
     */
    private $steps;

    /**
     * @param string[] $steps
     */
    public function __construct(array $steps)
    {
        Assert::thatAll($steps)->string();
        $this->steps = $steps;
    }

    public function render(): string
    {
        $steps = array_map(
            function (string $text): Step {
                return new Step($text);
            },
            $this->steps
        );

        return '<div class="Breadcrumbs__Breadcrumbs" data-reactroot="">'
            . '<div class="Breadcrumbs__Textwrap">' . ArrayRenderer::render($steps) . '</div>'
            . '<div class="Breadcrumbs__Right"></div>'
            . '</div>';
    }
}
