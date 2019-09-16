<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript\Value;

use BrandEmbassy\Components\StringEscaper;
use function sprintf;

final class StringValue implements JavascriptValue
{
    /**
     * @var string
     */
    private $value;


    public function __construct(string $value)
    {
        $this->value = $value;
    }


    public function render(): string
    {
        return sprintf('"%s"', StringEscaper::escapeJs($this->value));
    }
}
