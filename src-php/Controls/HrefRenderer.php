<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls;

use Psr\Http\Message\UriInterface;

final class HrefRenderer
{

    public static function uriToHrefFragment(?UriInterface $url): string
    {
        return $url !== null ? (' href="' . self::urlToString($url) . '"') : '';
    }

    private static function urlToString(UriInterface $url): string
    {
        $scheme = $url->getScheme();
        $authority = $url->getAuthority();
        $path = $url->getPath();
        $query = $url->getQuery();
        $fragment = $url->getFragment();

        $uri = '';

        if ($scheme !== '') {
            $uri .= $scheme . ':';
        }

        if ($authority !== '' || $scheme === 'file') {
            $uri .= '//' . $authority;
        }

        $uri .= $path;

        if ($query !== '') {
            $uri .= '?' . $query;
        }

        if ($fragment !== '') {
            $uri .= '#' . $fragment;
        }

        return $uri;
    }
}
