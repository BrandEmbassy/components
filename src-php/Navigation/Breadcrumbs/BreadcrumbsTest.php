<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Breadcrumbs;

use BrandEmbassy\Components\Controls\Button\Button;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class BreadcrumbsTest extends TestCase
{

    use SnapshotAssertTrait;

    public function testRendering(): void
    {
        $breadcrumbs = new Breadcrumbs(new Button('Add'), ['Foo', 'bar']);
        $this->assertSnapshot(__DIR__ . '/__snapshots__/breadcrumbs.html', $breadcrumbs);
    }

}
