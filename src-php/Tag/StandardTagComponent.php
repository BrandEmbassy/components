<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Tag;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\TagColor;
use BrandEmbassy\Components\UiComponent;

class StandardTagComponent implements UiComponent
{
    /**
     * @var string
     */
    private $title;

    /**
     * @var TagColor
     */
    private $tagColor;


    public function __construct(string $title, TagColor $tagColor)
    {
        $this->title = $title;
        $this->tagColor = $tagColor;
    }


    public function render(): string
    {
        $class = 'Tag__Tag Tag__' . $this->tagColor->getValue();

        return '<div class="' . $class . '">'
            . StringEscaper::escapeHtml($this->title)
            . '</div>';
    }
}
