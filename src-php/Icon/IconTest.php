<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Icon;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class IconTest extends TestCase
{
    use SnapshotAssertTrait;

    public function testRendering(): void
    {
        $this->assertSnapshot(__DIR__ . '/__snapshots__/icon.html', new Icon(IconType::get(IconType::PLUS)));
    }
}
