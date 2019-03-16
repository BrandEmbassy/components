<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Navigation\Breadcrumbs;

use BrandEmbassy\Components\Controls\Button\Button;
use BrandEmbassy\Components\SnapshotAssertTrait;
use GuzzleHttp\Psr7\Uri;
use PHPUnit\Framework\TestCase;

final class BreadcrumbsTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testRendering(): void
    {
        $steps = [
            new Step('Foo'),
            new Step('Bar', new Uri('https://google.com')),
        ];
        $breadcrumbs = new Breadcrumbs(new Button('Add'), $steps);
        $this->assertSnapshot(__DIR__ . '/__snapshots__/breadcrumbs.html', $breadcrumbs);
    }
}
