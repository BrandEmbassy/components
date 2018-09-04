<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\UiComponent;

final class Selectbox implements UiComponent
{

    private const CLASS_SELECTBOX = 'Selectbox__Selectbox';
    private const CLASS_SELECTBOX_WIDE = 'Selectbox__Wide';

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
    private $selectboxClass = self::CLASS_SELECTBOX;

    /**
     * @param SelectboxOption[] $options
     * @param string $name
     */
    public function __construct(array $options, string $name, SelectboxType $type)
    {
        $this->options = $options;
        $this->name = $name;

        if ($type->getValue() === SelectboxType::WIDE) {
            $this->selectboxClass .= ' ' . self::CLASS_SELECTBOX_WIDE;
        }
    }

    public function render(): string
    {
        return '<div class="' . $this->selectboxClass . '" data-reactroot=""><select name="' . $this->name . '">'
            . ArrayRenderer::render($this->options)
            . '</select></div>';
    }

}
