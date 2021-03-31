<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Grid;

use MabeEnum\Enum;

/**
 * @method string getValue()
 */
final class GridRowOption extends Enum
{
    public const XS_START = 'start-xs';
    public const XS_CENTER = 'center-xs';
    public const XS_END = 'end-xs';
    public const MD_START = 'start-md';
    public const MD_CENTER = 'center-md';
    public const MD_END = 'end-md';
    public const LG_START = 'start-lg';
    public const LG_CENTER = 'center-lg';
    public const LG_END = 'end-lg';
    public const XS_TOP = 'top-xs';
    public const XS_MIDDLE = 'middle-xs';
    public const XS_BOTTOM = 'bottom-xs';
    public const MD_TOP = 'top-md';
    public const MD_MIDDLE = 'middle-md';
    public const MD_BOTTOM = 'bottom-md';
    public const LG_TOP = 'top-lg';
    public const LG_MIDDLE = 'middle-lg';
    public const LG_BOTTOM = 'bottom-lg';
}
