<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Notification;

use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class NotificationMessageTest extends TestCase
{
    use SnapshotAssertTrait;


    /**
     * @dataProvider getNotificationsData
     */
    public function testComponentRendering(string $snapshot, NotificationMessage $message): void
    {
        $this->assertSnapshot($snapshot, $message);
    }


    /**
     * @return mixed[]
     */
    public function getNotificationsData(): array
    {
        return [
            'notificationSuccess' => [
                __DIR__ . '/__snapshots__/success.html',
                new NotificationMessage('Text text <strong>message</strong>', NotificationType::byValue(NotificationType::SUCCESS)),
            ],
            'notificationFixed'   => [
                __DIR__ . '/__snapshots__/success_fixed.html',
                new NotificationMessage(
                    'Text text message',
                    NotificationType::byValue(NotificationType::SUCCESS),
                    NotificationMessage::FIXED
                ),
            ],
            'notificationError'   => [
                __DIR__ . '/__snapshots__/error.html',
                new NotificationMessage('Text text message', NotificationType::byValue(NotificationType::ERROR)),
            ],
        ];
    }
}
