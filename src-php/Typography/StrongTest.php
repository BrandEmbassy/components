<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class StrongTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider strongDataProvider
     */
    public function testStrongIsRendered(string $snapshot, Strong $strong): void
    {
        $this->assertSnapshot($snapshot, $strong);
    }


    /**
     * @return mixed[]
     */
    public function strongDataProvider(): array
    {
        return [
            [
                __DIR__ . '/__snapshots__/strong.html',
                new Strong('Foo bar baz'),
            ],
            [
                __DIR__ . '/__snapshots__/strongXss.html',
                new Strong('Foo <script>alert(\'I am XSS Attack\');</script>'),
            ],
        ];
    }
}
