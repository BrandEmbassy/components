<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\SelectList;

use BrandEmbassy\Components\Controls\Checkbox\Checkbox;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class SelectListTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testRendering(): void
    {
        $checkbox = new Checkbox('', 'Foo Bar', 'id-123', 'baz[]', '1', false);
        $rows = [new SelectListItem([$checkbox])];
        $selectList = new SelectList($rows);

        $this->assertSnapshot(__DIR__ . '/__snapshots__/selectList.html', $selectList);
    }

}
