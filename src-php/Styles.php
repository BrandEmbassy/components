<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use Assert\Assertion;
use function array_keys;
use function array_merge;
use function implode;

final class Styles
{
    /**
     * @var array<string, string|Color>
     */
    private $styles;


    /**
     * @param array<string, string|Color> $styles
     */
    public function __construct(array $styles)
    {
        Assertion::allString(array_keys($styles), 'Array must be associative, all keys must be strings.');
        $this->styles = $styles;
    }


    /**
     * @param string|Color $value
     */
    public function with(string $key, $value): self
    {
        $styles = $this->styles;
        $styles[$key] = $value;

        return new self($styles);
    }


    public function merge(Styles $other): self
    {
        return new Styles(array_merge($this->styles, $other->styles));
    }


    public function getHtmlAttribute(): string
    {
        if ($this->styles === []) {
            return '';
        }

        $styles = [];
        foreach ($this->styles as $key => $value) {
            $trueValue = $value instanceof Color ? $value->getRgbHex() : $value;
            $styles[] = $key . ': ' . $trueValue . ';';
        }

        return ' style="' . implode(' ', $styles) . '"';
    }
}
