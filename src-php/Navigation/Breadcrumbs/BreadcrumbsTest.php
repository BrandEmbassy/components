<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Icon;

use Assert\InvalidArgumentException;
use BrandEmbassy\Components\Controls\Button\Button;
use BrandEmbassy\Components\Navigation\Breadcrumbs\Breadcrumbs;
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

    public function testTypeCheck(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Value "0" expected to be string, type integer given.');
        new Breadcrumbs('', [0, 1]);
    }

}
