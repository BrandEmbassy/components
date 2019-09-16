<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript;

use BrandEmbassy\Components\Javascript\Value\StringValue;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class JavascriptFileTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testJavascriptFileIsRendered(): void
    {
        $configuration = new ConstantCollection();
        $configuration->addConstant(new Constant('foo', new StringValue('bar')));

        $snapshot = __DIR__ . '/__snapshots__/renderedJavascriptFile.html';
        $filePath = __DIR__ . '/test.js';

        $this->assertSnapshot($snapshot, new JavascriptFile($filePath, $configuration));
    }
}
