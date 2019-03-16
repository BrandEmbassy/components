<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\ProfilePicture;

use BrandEmbassy\Components\SnapshotAssertTrait;
use GuzzleHttp\Psr7\Uri;
use PHPUnit\Framework\TestCase;

final class ProfilePictureTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider profilePicturesProvider
     * @param string         $expectedSnapshot
     * @param ProfilePicture $picture
     */
    public function testRendering(string $expectedSnapshot, ProfilePicture $picture): void
    {
        $this->assertSnapshot($expectedSnapshot, $picture);
    }


    /**
     * @return mixed[]
     */
    public function profilePicturesProvider(): array
    {
        $size24 = ProfilePictureSize::get(ProfilePictureSize::SIZE_24);
        $dummyUri = new Uri('https://example.com/a.png');

        return [
            [__DIR__ . '/__snapshots__/pictureNoTitle.html', new ProfilePicture($dummyUri, $size24)],
            [
                __DIR__ . '/__snapshots__/pictureWithTitle.html',
                new ProfilePicture($dummyUri, $size24, 'Lorem Ipsum title'),
            ],
        ];
    }
}
