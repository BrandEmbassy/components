<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Controls\ButtonLink;

use BrandEmbassy\Components\SnapshotAssertTrait;
use GuzzleHttp\Psr7\Uri;
use PHPUnit\Framework\TestCase;

class ButtonLinkAsFormTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getButtonsData
     */
    public function testButtonRendering(string $snapshot, ButtonLinkAsForm $buttonLinkAsForm): void
    {
        $this->assertSnapshot($snapshot, $buttonLinkAsForm);
    }


    /**
     * @return mixed[]
     */
    public function getButtonsData(): array
    {
        return [
            'buttonLinkAsForm' => [
                __DIR__ . '/__snapshots__/buttonLinkAsForm.html',
                new ButtonLinkAsForm('Save', new Uri('/process-form')),
            ],
        ];
    }
}
