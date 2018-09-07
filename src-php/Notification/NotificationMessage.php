<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Notification;

use BrandEmbassy\Components\StringEscaper;
use BrandEmbassy\Components\UiComponent;

final class NotificationMessage implements UiComponent
{

    public const FIXED = true;
    public const NOT_FIXED = false;

    /**
     * @var string
     */
    private $message;

    /**
     * @var NotificationType
     */
    private $type;

    /**
     * @var bool
     */
    private $fixed;

    public function __construct(string $message, NotificationType $type, bool $fixed = self::NOT_FIXED)
    {
        $this->message = $message;
        $this->type = $type;
        $this->fixed = $fixed;
    }

    public function render(): string
    {
        $fixedClass = $this->fixed ? ' Notification__Fixed' : '';

        return '<div class="Notification__Notification' . $fixedClass . ' ' . $this->type->getValue()
            . '" data-reactroot=""><span>' . StringEscaper::escapeHtml($this->message) . '</span></div>';
    }

}
