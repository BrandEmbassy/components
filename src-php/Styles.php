<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use Assert\Assertion;

final class Styles
{

    /**
     * @var array<string, string>
     */
    private $styles;

    public function __construct(array $styles)
    {
        Assertion::allString(array_keys($styles), 'Array must be associative, all keys must be strings.');
        $this->styles = $styles;
    }

    public function with(string $key, string $value): self
    {
        $styles = $this->styles;
        $styles[$key] = $value;

        return new self($styles);
    }

    public function merge(Styles $other): self
    {
        return new Styles(\array_merge($this->styles, $other->styles));
    }

    public function getHtmlAttribute(): string
    {
        if ($this->styles === []) {
            return '';
        }

        $styles = [];
        foreach ($this->styles as $key => $value) {
            $styles[] = $key . ': ' . $value . ';';
        }

        return ' style="' . \implode(' ', $styles) . '"';
    }

}
