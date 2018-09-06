<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Notification;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class NotificationMessageTest extends TestCase
{

    use SnapshotAssertTrait;

    /**
     * @dataProvider getNotificationsData
     * @param string $snapshot
     * @param NotificationMessage $message
     */
    public function testComponentRendering(string $snapshot, NotificationMessage $message): void
    {
        $this->assertSnapshot($snapshot, $message);
    }

    public function getNotificationsData(): array
    {
        return [
            'notificationSuccess' => [
                __DIR__ . '/__snapshots__/success.html',
                new NotificationMessage('Text text message', NotificationType::byValue(NotificationType::SUCCESS)),
            ],
            'notificationError' => [
                __DIR__ . '/__snapshots__/error.html',
                new NotificationMessage('Text text message', NotificationType::byValue(NotificationType::ERROR)),
            ],
        ];
    }

}
