<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

final class UiFragment implements UiComponent
{
    /**
     * @var UiComponent[]|string[]
     */
    private $components;


    /**
     * @param UiComponent[]|string[] $components
     */
    public function __construct(array $components)
    {
        $this->components = $components;
    }


    public function render(): string
    {
        return ArrayRenderer::render($this->components);
    }
}
