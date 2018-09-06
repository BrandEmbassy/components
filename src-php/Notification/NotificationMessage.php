<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Notification;

use BrandEmbassy\Components\UiComponent;

final class NotificationMessage implements UiComponent
{

    /**
     * @var string
     */
    private $message;

    /**
     * @var NotificationType
     */
    private $type;

    public function __construct(string $message, NotificationType $type)
    {
        $this->message = $message;
        $this->type = $type;
    }

    public function render(): string
    {
        return '<div class="Notification__Notification ' . $this->type->getValue() . '" data-reactroot=""><span>'
            . $this->message
            . '</span></div>';
    }

}
