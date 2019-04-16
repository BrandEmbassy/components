<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\StringEscaper;
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
     * @var UiComponent|string
     */
    private $description;

    /**
     * @var bool
     */
    private $isError;

    /**
     * @var bool
     */
    private $disabled;


    /**
     * @param SelectboxOption[] $options
     * @param string            $name
     * @param SelectboxType     $type
     * @param string            $description
     * @param bool              $isError
     * @param bool              $disabled
     */
    public function __construct(
        array $options,
        string $name,
        SelectboxType $type,
        string $description = '',
        bool $isError = false,
        bool $disabled = false
    ) {
        $this->options = $options;
        $this->name = $name;
        $this->description = $description;
        $this->isError = $isError;
        $this->disabled = $disabled;

        if ($type->getValue() === SelectboxType::WIDE) {
            $this->selectboxClass .= ' ' . self::CLASS_SELECTBOX_WIDE;
        }
    }


    public function render(): string
    {
        $errorClass = $this->isError ? ' Selectbox__Error' : '';
        $description = $this->description !== ''
            ? '<div class="Selectbox__Desc">' . ArrayRenderer::render([$this->description]) . '</div>'
            : '';

        $disabled = $this->disabled ? ' disabled' : '';

        return '<div class="' . $this->selectboxClass . $errorClass . '">'
            . '<select' . $disabled . ' name="' . StringEscaper::escapeHtmlAttribute($this->name) . '">'
            . ArrayRenderer::render($this->options)
            . '</select>' . $description . '</div>';
    }
}
