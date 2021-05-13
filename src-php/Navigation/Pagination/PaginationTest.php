<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Pagination;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class PaginationTest extends TestCase
{
    use SnapshotAssertTrait;

    /**
     * @dataProvider getLessThanMaxPagesDataProvider
     *
     * @param string $expectedSnapshot
     * @param int $totalItemCount
     * @param int $pageNumberRequested
     * @param int $pageSize
     */
    public function testRenderingFewerThanMaxPages(
        string $expectedSnapshot,
        int $totalItemCount,
        int $pageNumberRequested,
        int $pageSize
    ): void {
        $pagination = new Pagination('/page-number', $totalItemCount, $pageNumberRequested, $pageSize);

        $this->assertSnapshot(__DIR__ . '/__snapshots__/' . $expectedSnapshot, $pagination);
    }


    public function getLessThanMaxPagesDataProvider(): array
    {
        return [
            'first page' => [
                'expectedSnapshot' => 'lessThanMax_firstPage.html',
                'totalItemCount' => 47,
                'pageNumberRequested' => 1,
                'pageSize' => 20,
            ],
            'next page' => [
                'expectedSnapshot' => 'lessThanMax_nextPage.html',
                'totalItemCount' => 47,
                'pageNumberRequested' => 2,
                'pageSize' => 20,
            ],
            'last page' => [
                'expectedSnapshot' => 'lessThanMax_lastPage.html',
                'totalItemCount' => 47,
                'pageNumberRequested' => 3,
                'pageSize' => 20,
            ],
            'previous page' => [
                'expectedSnapshot' => 'lessThanMax_previousPage.html',
                'totalItemCount' => 47,
                'pageNumberRequested' => 2,
                'pageSize' => 20,
            ],
        ];
    }


    /**
     * @dataProvider getGreaterThanMaxPagesDataProvider
     *
     * @param string $expectedSnapshot
     * @param int $totalItemCount
     * @param int $pageNumberRequested
     * @param int $pageSize
     */
    public function testRenderingGreaterThanMaxPages(
        string $expectedSnapshot,
        int $totalItemCount,
        int $pageNumberRequested,
        int $pageSize
    ): void {
        $pagination = new Pagination('/page-number', $totalItemCount, $pageNumberRequested, $pageSize);

        $this->assertSnapshot(__DIR__ . '/__snapshots__/' . $expectedSnapshot, $pagination);
    }


    public function getGreaterThanMaxPagesDataProvider(): array
    {
        return [
            'first page' => [
                'expectedSnapshot' => 'greaterThanMax_firstPage.html',
                'totalItemCount' => 37,
                'pageNumberRequested' => 1,
                'pageSize' => 5,
            ],
            'next page' => [
                'expectedSnapshot' => 'greaterThanMax_nextPage.html',
                'totalItemCount' => 37,
                'pageNumberRequested' => 2,
                'pageSize' => 5,
            ],
            'last page' => [
                'expectedSnapshot' => 'greaterThanMax_lastPage.html',
                'totalItemCount' => 37,
                'pageNumberRequested' => 8,
                'pageSize' => 5,
            ],
            'previous page' => [
                'expectedSnapshot' => 'greaterThanMax_previousPage.html',
                'totalItemCount' => 37,
                'pageNumberRequested' => 7,
                'pageSize' => 5,
            ],
        ];
    }
    /**
     * @dataProvider getEqualToMaxPagesDataProvider
     *
     * @param string $expectedSnapshot
     * @param int $totalItemCount
     * @param int $pageNumberRequested
     * @param int $pageSize
     */
    public function testRenderingEqualToMaxPages(
        string $expectedSnapshot,
        int $totalItemCount,
        int $pageNumberRequested,
        int $pageSize
    ): void {
        $pagination = new Pagination('/page-number', $totalItemCount, $pageNumberRequested, $pageSize);

        $this->assertSnapshot(__DIR__ . '/__snapshots__/' . $expectedSnapshot, $pagination);
    }


    public function getEqualToMaxPagesDataProvider(): array
    {
        return [
            'first page' => [
                'expectedSnapshot' => 'equalToMax_firstPage.html',
                'totalItemCount' => 23,
                'pageNumberRequested' => 1,
                'pageSize' => 5,
            ],
            'next page' => [
                'expectedSnapshot' => 'equalToMax_nextPage.html',
                'totalItemCount' => 23,
                'pageNumberRequested' => 2,
                'pageSize' => 5,
            ],
            'last page' => [
                'expectedSnapshot' => 'equalToMax_lastPage.html',
                'totalItemCount' => 23,
                'pageNumberRequested' => 5,
                'pageSize' => 5,
            ],
            'previous page' => [
                'expectedSnapshot' => 'equalToMax_previousPage.html',
                'totalItemCount' => 23,
                'pageNumberRequested' => 4,
                'pageSize' => 5,
            ],
        ];
    }
}
