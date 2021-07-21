<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\Selectbox;

use BrandEmbassy\Components\ArrayRenderer;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

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
     * @var string|null
     */
    private $id;

    /**
     * @var string|null
     */
    private $onChange;


    /**
     * @param SelectboxOption[] $options
     */
    public function __construct(
        array $options,
        string $name,
        SelectboxType $type,
        string $description = '',
        bool $isError = false,
        bool $disabled = false,
        ?string $id = null,
        ?string $onChange = null
    ) {
        $this->options = $options;
        $this->name = $name;
        $this->description = $description;
        $this->isError = $isError;
        $this->disabled = $disabled;
        $this->id = $id;
        $this->onChange = $onChange;

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

        $disabled = $this->disabled ? ' disabled="disabled"' : '';
        $disabledClass = $this->disabled ? ' Selectbox__Disabled' : '';

        $id = $this->id !== null ? sprintf(' id="%s"', $this->id) : '';
        $name = sprintf(' name="%s"', StringEscaper::escapeHtmlAttribute($this->name));
        $onChange = $this->onChange !== null ? sprintf(' onchange="%s"', $this->onChange) : '';

        return '<div class="' . $this->selectboxClass . $errorClass . $disabledClass . '">'
            . '<select'
                . $disabled
                . $id
                . $name
                . $onChange
                . '>'
            . ArrayRenderer::render($this->options)
            . '</select>' . $description . '</div>';
    }
}
