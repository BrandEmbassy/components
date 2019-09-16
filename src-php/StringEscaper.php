<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use InvalidArgumentException;
use Nette\Utils\Strings;
use Zend\Escaper\Escaper;
use function sprintf;

final class StringEscaper
{
    private const ENCODING = 'utf-8';


    public static function escapeHtml(string $input): string
    {
        return self::getEscaper()->escapeHtml($input);
    }


    public static function validateInputName(string $name): void
    {
        if (Strings::match($name, '~^[0-9a-zA-Z\-\_\[\]]+$~') === null) {
            throw new InvalidArgumentException(
                sprintf('Name must be alphanumerical and (-_[]) but "%s" given.', $name)
            );
        }
    }


    public static function escapeHtmlAttribute(string $input): string
    {
        return self::getEscaper()->escapeHtmlAttr($input);
    }


    public static function escapeJs(string $input): string
    {
        return self::getEscaper()->escapeJs($input);
    }


    private static function getEscaper(): Escaper
    {
        return new Escaper(self::ENCODING);
    }
}
