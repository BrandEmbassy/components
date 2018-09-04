<?php declare(strict_types = 1);

namespace BrandEmbassy\Components;

final class StringEscaper
{

    private const ENCODING = 'UTF-8';

    public static function makeSafe(string $input): string
    {
        return \htmlspecialchars($input, ENT_QUOTES, static::ENCODING);
    }

}
