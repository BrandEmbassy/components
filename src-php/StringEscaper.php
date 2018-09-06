<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

use Zend\Escaper\Escaper;

final class StringEscaper
{

    private const ENCODING = 'utf-8';

    public static function escapeHtml(string $input): string
    {
        return self::getEscaper()->escapeHtml($input);
    }

    public static function escapeHtmlAttribute(string $input): string
    {
        return self::getEscaper()->escapeHtmlAttr($input);
    }

    private static function getEscaper(): Escaper
    {
        return new Escaper(self::ENCODING);
    }

}
