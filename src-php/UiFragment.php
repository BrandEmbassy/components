<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

final class UiFragment implements UiComponent
{

    /**
     * @var array|UiComponent[]
     */
    private $components;

    /**
     * @param UiComponent[] $components
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
