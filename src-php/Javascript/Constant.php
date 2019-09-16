<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

final class Constant implements UiComponent
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var UiComponent
     */
    private $value;


    public function __construct(string $name, UiComponent $value)
    {
        $this->name = $name;
        $this->value = $value;
    }


    public function render(): string
    {
        return sprintf(
            'const %s = %s;',
            StringEscaper::escapeJs($this->name),
            $this->value->render()
        );
    }
}
