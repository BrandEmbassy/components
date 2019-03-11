<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\ProfilePicture;

use BrandEmbassy\Components\Controls\UriRenderer;
use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;
use Psr\Http\Message\UriInterface;

final class ProfilePicture implements UiComponent
{

    /**
     * @var UriInterface
     */
    private $src;

    /**
     * @var ProfilePictureSize
     */
    private $size;

    /**
     * @var string
     */
    private $title;

    public function __construct(UriInterface $src, ProfilePictureSize $size, string $title = '')
    {
        $this->src = $src;
        $this->size = $size;
        $this->title = $title;
    }

    public function render(): string
    {
        $titleFragment = $this->title !== ''
            ? (' title="' . StringEscaper::escapeHtmlAttribute($this->title) . '"')
            : '';

        $html = '<div class="ProfilePicture__ProfilePicture ' . $this->size->getValue() . '">';
        $html .= '<img' . UriRenderer::uriToSrcFragment($this->src) . ' alt=""' . $titleFragment . '/>';
        $html .= '</div>';

        return $html;
    }

}
