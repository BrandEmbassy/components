<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Sentiment;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

class SentimentComponentTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testShouldRenderSentiment(): void
    {
        $component = new SentimentComponent(-2);
        $this->assertSnapshot(__DIR__ . '/__snapshots__/sentiment.html', $component);
    }
}
