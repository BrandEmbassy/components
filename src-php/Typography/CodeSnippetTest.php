<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use Nette\Utils\FileSystem;
use PHPUnit\Framework\TestCase;

final class CodeSnippetTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testCodeSnippetIsRendered(): void
    {
        $code = FileSystem::read(__DIR__ . '/__snapshots__/exampleSnippet.html');

        $this->assertSnapshot(__DIR__ . '/__snapshots__/codeSnippet.html', new CodeSnippet($code));
    }
}
