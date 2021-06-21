<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Pagination;

use BrandEmbassy\Components\Controls\UriParser;
use BrandEmbassy\Components\UiComponent;
use Nette\Utils\FileSystem;
use Psr\Http\Message\UriInterface;
use function ceil;
use function http_build_query;
use function in_array;
use function sprintf;
use function str_replace;

final class Pagination implements UiComponent
{
    private const FIRST_PAGE = 1;
    private const MAX_PAGES_TO_DISPLAY = 5;
    private const FIRST_PAGE_SVGS = ['arrow-first', 'arrow-back'];
    private const LAST_PAGE_SVGS = ['arrow-next', 'arrow-last'];
    private const DISABLED_CLASS = 'class="Pagination__disableClick"';
    private const EMPTY_COMPONENT = '';

    /**
     * @var UriInterface
     */
    private $uri;

    /**
     * @var string
     */
    private $pageParameterName;

    /**
     * @var int
     */
    private $totalItemCount;

    /**
     * @var int
     */
    private $pageSize;


    public function __construct(
        UriInterface $uri,
        string $pageParameterName,
        int $totalItemCount,
        int $pageSize
    ) {
        $this->uri = $uri;
        $this->pageParameterName = $pageParameterName;
        $this->totalItemCount = $totalItemCount;
        $this->pageSize = $pageSize;
    }


    public function render(): string
    {
        if ($this->totalItemCount <= 0) {
            return self::EMPTY_COMPONENT;
        }

        $uriParser = new UriParser($this->uri);
        $pageNumberRequested = (int)$uriParser->getParameterValue($this->pageParameterName);

        $totalPageCount = (int)ceil($this->totalItemCount / $this->pageSize);

        $prevPageNumber = ($pageNumberRequested - 1) <= 0 ? 1 : $pageNumberRequested - 1;
        $nextPageNumber = ($pageNumberRequested + 1) >= $totalPageCount
            ? $totalPageCount
            : $pageNumberRequested + 1;

        return '<div class="Pagination__paginationComponent">'
            . '<table class="Pagination__table">'
            . '<tr>'
                . '<td class="Pagination__td"><div class="Pagination__displayCounts">'
                    . $this->renderDisplayCounts($pageNumberRequested)
                . '</div></td>'
                . '<td class="Pagination__tdCentered">'
                    . $this->renderSvgAnchorTag($uriParser, 'arrow-first', 1, $totalPageCount)
                    . $this->renderSvgAnchorTag($uriParser, 'arrow-back', $prevPageNumber, $totalPageCount)
                    . '<div class="Pagination__Pagination">'
                        . $this->renderPageAnchorTags($uriParser, $totalPageCount)
                    . '</div>'
                    . $this->renderSvgAnchorTag($uriParser, 'arrow-next', $nextPageNumber, $totalPageCount)
                    . $this->renderSvgAnchorTag($uriParser, 'arrow-last', $totalPageCount, $totalPageCount)
                . '</td>'
                . '<td class="Pagination__td"></td>'
            . '</tr></table></div>';
    }


    private function renderDisplayCounts(int $pageNumberRequested): string
    {
        $lastItemCalculated = $pageNumberRequested * $this->pageSize;
        $lastItemDisplayed = $lastItemCalculated > $this->totalItemCount ? $this->totalItemCount : $lastItemCalculated;
        $firstItemDisplayed = $lastItemCalculated - $this->pageSize + 1;

        return sprintf(
            'Displaying %d - %d of %d',
            $firstItemDisplayed,
            $lastItemDisplayed,
            $this->totalItemCount
        );
    }


    private function renderPageAnchorTags(UriParser $uriParser, int $totalPageCount): string
    {
        $lastPage = $totalPageCount <= self::MAX_PAGES_TO_DISPLAY
            ? $totalPageCount
            : self::MAX_PAGES_TO_DISPLAY;

        $pageNumberRequested = (int)$uriParser->getParameterValue($this->pageParameterName);

        if (($pageNumberRequested - 2) < 1) {
            return $this->renderPageAnchors($uriParser, self::FIRST_PAGE, $lastPage);
        }

        if ($pageNumberRequested + 2 > $totalPageCount) {
            return $this->renderPageAnchors(
                $uriParser,
                $totalPageCount - ($lastPage - 1),
                $totalPageCount
            );
        }

        return $this->renderPageAnchors(
            $uriParser,
            $pageNumberRequested - 2,
            $pageNumberRequested + 2
        );
    }


    private function renderPageAnchors(UriParser $uriParser, int $firstPage, int $lastPage): string
    {
        $anchors = '';
        for ($pageNumber = $firstPage; $pageNumber <= $lastPage; $pageNumber++) {
            $anchors .= $this->renderPageAnchorTag($uriParser, $pageNumber);
        }

        return $anchors;
    }


    private function renderPageAnchorTag(UriParser $uriParser, int $pageNumber): string
    {
        if ($pageNumber === (int)$uriParser->getParameterValue($this->pageParameterName)) {
            return sprintf('<a class="Pagination__current">%d</a>', $pageNumber);
        }

        return sprintf(
            '<a href="%s">%d</a>',
            $this->renderTargetPageHref($uriParser, $pageNumber),
            $pageNumber
        );
    }


    private function renderSvgAnchorTag(
        UriParser $uriParser,
        string $svgName,
        int $anchorPage,
        int $totalPageCount
    ): string {
        $attrs = $this->renderSvgAnchorAttributes($uriParser, $svgName, $anchorPage, $totalPageCount);
        $svgContents = FileSystem::read(__DIR__ . '/images/' . $svgName . '.svg');
        $svg = str_replace($svgName . '-svg', 'Pagination__svgPagination', $svgContents);

        return sprintf('<a %s>%s</a>', $attrs, $svg);
    }


    private function renderSvgAnchorAttributes(
        UriParser $uriParser,
        string $svgName,
        int $expectedPageNumber,
        int $totalPageCount
    ): string {
        $pageNumberRequested = (int)$uriParser->getParameterValue($this->pageParameterName);

        if ($pageNumberRequested === self::FIRST_PAGE && in_array($svgName, self::FIRST_PAGE_SVGS, true)) {
            return self::DISABLED_CLASS;
        }

        if ($pageNumberRequested === $totalPageCount && in_array($svgName, self::LAST_PAGE_SVGS, true)) {
            return self::DISABLED_CLASS;
        }

        return sprintf(
            'class="Pagination__Pagination" href="%s"',
            $this->renderTargetPageHref($uriParser, $expectedPageNumber)
        );
    }


    private function renderTargetPageHref(UriParser $uriParser, int $targetPageNumber): string
    {
        $queryParams = $uriParser->getQueryParameters();
        $queryParams[$this->pageParameterName] = $targetPageNumber;

        return sprintf('%s?%s', $uriParser->getBaseUrl(), http_build_query($queryParams));
    }
}
