<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

trait SnapshotAssertTrait
{

    public function assertSnapshot(string $snapshotFileName, UiComponent $component): void
    {
        $snapshot = \file_get_contents($snapshotFileName);
        \assert($snapshot !== false);
        $snapshot = \str_replace(['  ', "\n"], '', $snapshot);

        $this->assertEquals($snapshot, $component->render());
    }

}
