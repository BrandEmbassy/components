<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Notification;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class NotificationType extends Enum
{
    public const SUCCESS = 'Notification__isSuccess';
    public const ERROR = 'Notification__isError';
    public const WARNING = 'Notification__isWarning';
}
