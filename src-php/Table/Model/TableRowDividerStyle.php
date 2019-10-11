<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Model;

use MabeEnum\Enum;

final class TableRowDividerStyle extends Enum
{
    public const LABEL_SINGLE_ROW = 'label_single';
    public const LABEL_SPLITTED_ROW = 'label_split';
}
