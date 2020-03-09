<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography\Lists;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class ListComponentTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider snapshotFilesProvider
     */
    public function testListIsRendered(string $snapshotFile, ListType $listType): void
    {
        $items = [
            new ListItem('First item', ListItemType::get(ListItemType::LIST_ITEM)),
            new ListItem('Second item', ListItemType::get(ListItemType::TERM_DEFINITION)),
            new ListItem('Third item', ListItemType::get(ListItemType::TERM_DESCRIPTION)),
        ];

        $list = new ListComponent($items, $listType);

        $this->assertSnapshot($snapshotFile, $list);
    }


    /**
     * @return string[][]|ListType[][]
     */
    public function snapshotFilesProvider(): array
    {
        return [
            'unordered list' => [
                __DIR__ . '/__snapshots__/unorderedList.html',
                ListType::get(ListType::UNORDERED),
            ],
            'ordered list' => [
                __DIR__ . '/__snapshots__/orderedList.html',
                ListType::get(ListType::ORDERED),
            ],
            'description list' => [
                __DIR__ . '/__snapshots__/descriptionList.html',
                ListType::get(ListType::DESCRIPTION_LIST),
            ],
        ];
    }
}
