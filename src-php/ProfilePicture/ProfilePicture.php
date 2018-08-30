<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\ProfilePicture;

use BrandEmbassy\Components\Controls\UriRenderer;
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

    public function __construct(UriInterface $src, ProfilePictureSize $size)
    {
        $this->src = $src;
        $this->size = $size;
    }

    public function render(): string
    {
        $html = '<div class="ProfilePicture__ProfilePicture ' . $this->size->getValue() . '" data-reactroot="">';
        $html .= '<img ' . UriRenderer::uriToSrcFragment($this->src) . ' alt="" /></div>';

        return $html;
    }

}
