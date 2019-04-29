<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use PHPUnit\Framework\TestCase;

final class NewLineTest extends TestCase
{
    public function testRendering(): void
    {
        $component = new NewLine();

        self::assertSame('<br />', $component->render());
    }
}
