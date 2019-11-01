<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class EmphasizedTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider emphasizedDataProvider
     * @param string     $snapshot
     * @param Emphasized $emphasized
     */
    public function testEmphasizedIsRendered(string $snapshot, Emphasized $emphasized): void
    {
        $this->assertSnapshot($snapshot, $emphasized);
    }


    /**
     * @return mixed[]
     */
    public function emphasizedDataProvider(): array
    {
        return [
            [
                __DIR__ . '/__snapshots__/emphasized.html',
                new Emphasized('Foo bar baz'),
            ],
            [
                __DIR__ . '/__snapshots__/emphasizedXss.html',
                new Emphasized('Foo <script>alert(\'I am XSS Attack\');</script>'),
            ],
        ];
    }
}
