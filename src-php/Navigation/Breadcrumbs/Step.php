<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Breadcrumbs;

use BrandEmbassy\Components\Controls\UriRenderer;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use Psr\Http\Message\UriInterface;

final class Step implements UiComponent
{

    /**
     * @var string
     */
    private $text;

    /**
     * @var null|UriInterface
     */
    private $url;

    public function __construct(string $text, ?UriInterface $url = null)
    {
        $this->text = $text;
        $this->url = $url;
    }

    public function render(): string
    {
        if ($this->url !== null) {
            $href = UriRenderer::uriToHrefFragment($this->url);

            return '<a' . $href . ' class="Breadcrumbs__Step">' . StringEscaper::escapeHtml($this->text) . '</a>';
        }

        return '<div class="Breadcrumbs__Step">' . StringEscaper::escapeHtml($this->text) . '</div>';
    }
}
