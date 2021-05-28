<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls;

use Psr\Http\Message\UriInterface;
use function array_key_exists;
use function explode;
use function is_numeric;
use function parse_str;

final class UriParser
{
    private const BASE_URL_INDEX = 0;
    private const FIRST_PAGE = 1;

    /**
     * @var string
     */
    private $baseUrl;

    /**
     * @var mixed[]
     */
    private $queryParams;


    public function __construct(UriInterface $uri)
    {
        $url = UriRenderer::urlToString($uri);
        $this->baseUrl = explode('?', $url)[self::BASE_URL_INDEX];

        $this->queryParams = [];
        parse_str($uri->getQuery(), $this->queryParams);
    }


    public function getBaseUrl(): string
    {
        return $this->baseUrl;
    }


    /**
     * @return mixed[]
     */
    public function getQueryParameters(): array
    {
        return $this->queryParams;
    }


    /**
     * @param string $parameterName

     * @return mixed
     */
    public function getParameterValue(string $parameterName)
    {
        if (!array_key_exists($parameterName, $this->queryParams)) {
            return self::FIRST_PAGE;
        }

        if (!is_numeric($this->queryParams[$parameterName])) {
            return self::FIRST_PAGE;
        }

        return (int)$this->queryParams[$parameterName];
    }
}
