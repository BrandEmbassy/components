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
    private $totalPageCount;


    public function __construct(
        string $pageRoutePath,
        int $totalItemCount,
        int $pageNumberRequested,
        int $totalPageCount
    ) {
        $this->pageRoutePath = $pageRoutePath;
        $this->totalItemCount = $totalItemCount;
        $this->pageNumberRequested = $pageNumberRequested;
        $this->totalPageCount = $totalPageCount;
    }


    public function render(): string
    {
        $prevPageNumber = ($this->pageNumberRequested - 1) <= 0 ? 1 : $this->pageNumberRequested - 1;
        $nextPageNumber = ($this->pageNumberRequested + 1) >= $this->totalPageCount
            ? $this->totalPageCount
            : $this->pageNumberRequested + 1;

        return '<hr><div class="main">'
            . '<div class="displayCounts">' . $this->renderDisplayCounts() . '</div>'
            . '<div class="center">'
            . $this->renderSvgAnchorTag('arrow-first', 1)
            . $this->renderSvgAnchorTag('arrow-back', $prevPageNumber)
            . '<div class="pagination">' . $this->renderPageAnchorTags() . '</div>'
            . $this->renderSvgAnchorTag('arrow-next', $nextPageNumber)
            . $this->renderSvgAnchorTag('arrow-last', $this->totalPageCount)
            . '</div></div>';
    }


    public static function renderStyles(): string
    {
        return FileSystem::read(__DIR__ . '/css/Pagination.css');
    }


    private function renderDisplayCounts(): string
    {
        $pageSize = (int)ceil($this->totalItemCount / $this->totalPageCount);
        $lastItemCalculated = $this->pageNumberRequested * $pageSize;
        $lastItemDisplayed = $lastItemCalculated > $this->totalItemCount ? $this->totalItemCount : $lastItemCalculated;
        $firstItemDisplayed = $lastItemCalculated - $pageSize + 1;

        return sprintf(
            'Displaying %d - %d of %d',
            $firstItemDisplayed,
            $lastItemDisplayed,
            $this->totalItemCount
        );
    }


    private function renderPageAnchorTags(): string
    {
        if (($this->pageNumberRequested - 2) < 1) {
            return $this->renderPageAnchors(self::FIRST_PAGE, self::MAX_PAGES_TO_DISPLAY);
        }

        if ($this->pageNumberRequested + 2 > $this->totalPageCount) {
            return $this->renderPageAnchors(
                $this->totalPageCount - (self::MAX_PAGES_TO_DISPLAY - 1),
                $this->totalPageCount
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


    private function renderSvgAnchorTag(string $svgName, int $anchorPage): string
    {
        $attrs = $this->renderSvgAnchorAttributes($svgName, $anchorPage);
        $svgContents = FileSystem::read(__DIR__ . '/images/' . $svgName . '.svg');
        $svg = str_replace($svgName . '-svg', 'svgPagination', $svgContents);

        return sprintf('<a %s>%s</a>', $attrs, $svg);
    }


    private function renderSvgAnchorAttributes(string $svgName, int $expectedPageNumber): string
    {
        if ($this->pageNumberRequested === self::FIRST_PAGE && in_array($svgName, self::FIRST_PAGE_SVGS, true)) {
            return self::DISABLED_CLASS;
        }

        if ($this->pageNumberRequested === $this->totalPageCount && in_array($svgName, self::LAST_PAGE_SVGS, true)) {
            return self::DISABLED_CLASS;
        }

        return sprintf('class="pagination" href="%s/%d"', $this->pageRoutePath, $expectedPageNumber);
    }
}
