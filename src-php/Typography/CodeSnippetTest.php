<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class CodeSnippetTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testCodeSnippetIsRendered(): void
    {
        $code = <<<EOT
<script type="text/javascript">
        alert('Hello boys & girls!')
    </script>
EOT;

        $this->assertSnapshot(__DIR__ . '/__snapshots__/codeSnippet.html', new CodeSnippet($code));
    }
}
