<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class JavascriptFileTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testJavascriptFileIsRendered(): void
    {
        $snapshot = __DIR__ . '/__snapshots__/renderedJavascriptFile.html';
        $filePath = __DIR__ . '/test.js';

        $this->assertSnapshot($snapshot, new JavascriptFile($filePath));
    }
}
