<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Notification;

use MabeEnum\Enum;

final class NotificationType extends Enum
{

    public const SUCCESS = 'Notification__isSuccess';
    public const ERROR = 'Notification__isError';
    public const WARNING = 'Notification__isWarning';

}
