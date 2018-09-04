<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Selectbox implements UiComponent
{

    /**
     * @var SelectboxOption[]
     */
    private $options;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $selectboxClass = 'Selectbox__Selectbox';

    /**
     * @param SelectboxOption[] $options
     * @param string $name
     */
    public function __construct(array $options, string $name, SelectboxType $type)
    {
        $this->options = $options;
        $this->name = $name;

        if ($type->getValue() === SelectboxType::WIDE) {
            $this->selectboxClass .= ' Selectbox__Wide';
        }
    }

    public function render(): string
    {
        return '<div class="' . $this->selectboxClass . '" data-reactroot=""><select name="' . $this->name . '">'
            . ArrayRenderer::render($this->options)
            . '</select></div>';
    }

}
