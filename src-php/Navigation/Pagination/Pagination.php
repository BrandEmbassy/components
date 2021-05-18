<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Pagination;

use BrandEmbassy\Components\UiComponent;
use Nette\Utils\FileSystem;
use function ceil;
use function in_array;
use function sprintf;
use function str_replace;

final class Pagination implements UiComponent
{
    private const FIRST_PAGE = 1;
    private const MAX_PAGES_TO_DISPLAY = 5;
    private const FIRST_PAGE_SVGS = ['arrow-first', 'arrow-back'];
    private const LAST_PAGE_SVGS = ['arrow-next', 'arrow-last'];
    private const DISABLED_CLASS = 'class="disableClick"';

    /**
     * @var string
     */
    private $pageRoutePath;

    /**
     * @var int
     */
    private $totalItemCount;

    /**
     * @var int
     */
    private $pageNumberRequested;

    /**
     * @var int
     */
    private $pageSize;


    public function __construct(
        string $pageRoutePath,
        int $totalItemCount,
        int $pageNumberRequested,
        int $pageSize
    ) {
        $this->pageRoutePath = $pageRoutePath;
        $this->totalItemCount = $totalItemCount;
        $this->pageNumberRequested = $pageNumberRequested;
        $this->pageSize = $pageSize;
    }


    public function render(): string
    {
        $totalPageCount = (int)ceil($this->totalItemCount / $this->pageSize);

        $prevPageNumber = ($this->pageNumberRequested - 1) <= 0 ? 1 : $this->pageNumberRequested - 1;
        $nextPageNumber = ($this->pageNumberRequested + 1) >= $totalPageCount
            ? $totalPageCount
            : $this->pageNumberRequested + 1;

        return '<hr><div class="paginationComponent">'
            . '<table>'
            . '<tr>'
                . '<td><div class="displayCounts">' . $this->renderDisplayCounts() . '</div></td>'
                . '<td align="center">'
                    . $this->renderSvgAnchorTag('arrow-first', 1, $totalPageCount)
                    . $this->renderSvgAnchorTag('arrow-back', $prevPageNumber, $totalPageCount)
                    . '<div class="pagination">' . $this->renderPageAnchorTags($totalPageCount) . '</div>'
                    . $this->renderSvgAnchorTag('arrow-next', $nextPageNumber, $totalPageCount)
                    . $this->renderSvgAnchorTag('arrow-last', $totalPageCount, $totalPageCount)
                . '</td>'
                . '<td></td>'
            . '</tr></table></div>';
    }


    public static function renderStyles(): string
    {
        return FileSystem::read(__DIR__ . '/Pagination.css');
    }


    private function renderDisplayCounts(): string
    {
        $lastItemCalculated = $this->pageNumberRequested * $this->pageSize;
        $lastItemDisplayed = $lastItemCalculated > $this->totalItemCount ? $this->totalItemCount : $lastItemCalculated;
        $firstItemDisplayed = $lastItemCalculated - $this->pageSize + 1;

        return sprintf(
            'Displaying %d - %d of %d',
            $firstItemDisplayed,
            $lastItemDisplayed,
            $this->totalItemCount
        );
    }


    private function renderPageAnchorTags(int $totalPageCount): string
    {
        $lastPage = $totalPageCount <= self::MAX_PAGES_TO_DISPLAY
            ? $totalPageCount
            : self::MAX_PAGES_TO_DISPLAY;

        if (($this->pageNumberRequested - 2) < 1) {
            return $this->renderPageAnchors(self::FIRST_PAGE, $lastPage);
        }

        if ($this->pageNumberRequested + 2 > $totalPageCount) {
            return $this->renderPageAnchors(
                $totalPageCount - ($lastPage - 1),
                $totalPageCount
            );
        }

        return $this->renderPageAnchors($this->pageNumberRequested - 2, $this->pageNumberRequested + 2);
    }


    private function renderPageAnchors(int $firstPage, int $lastPage): string
    {
        $anchors = '';
        for ($pageNumber = $firstPage; $pageNumber <= $lastPage; $pageNumber++) {
            $anchors .= $this->renderPageAnchorTag($pageNumber);
        }

        return $anchors;
    }


    private function renderPageAnchorTag(int $pageNumber): string
    {
        if ($pageNumber === $this->pageNumberRequested) {
            return sprintf('<a class="current">%d</a>', $pageNumber);
        }

        return sprintf('<a href="%s/%2$d">%2$d</a>', $this->pageRoutePath, $pageNumber);
    }


    private function renderSvgAnchorTag(string $svgName, int $anchorPage, int $totalPageCount): string
    {
        $attrs = $this->renderSvgAnchorAttributes($svgName, $anchorPage, $totalPageCount);
        $svgContents = FileSystem::read(__DIR__ . '/images/' . $svgName . '.svg');
        $svg = str_replace($svgName . '-svg', 'svgPagination', $svgContents);

        return sprintf('<a %s>%s</a>', $attrs, $svg);
    }


    private function renderSvgAnchorAttributes(string $svgName, int $expectedPageNumber, int $totalPageCount): string
    {
        if ($this->pageNumberRequested === self::FIRST_PAGE && in_array($svgName, self::FIRST_PAGE_SVGS, true)) {
            return self::DISABLED_CLASS;
        }

        if ($this->pageNumberRequested === $totalPageCount && in_array($svgName, self::LAST_PAGE_SVGS, true)) {
            return self::DISABLED_CLASS;
        }

        return sprintf('class="pagination" href="%s/%d"', $this->pageRoutePath, $expectedPageNumber);
    }
}
