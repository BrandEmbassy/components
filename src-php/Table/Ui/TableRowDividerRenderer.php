<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Table\Ui;

use BrandEmbassy\Components\Table\Model\TableRowDivider;
use BrandEmbassy\Components\Table\Model\TableRowDividerStyle;
use BrandEmbassy\Components\UiComponent;
use function sprintf;

final class TableRowDividerRenderer implements UiComponent
{
    /**
     * @var TableRowDivider
     */
    private $tableRowDivider;

    /**
     * @var int
     */
    private $numberOfColumns;


    public function __construct(TableRowDivider $tableRowDivider, int $numberOfColumns)
    {
        $this->tableRowDivider = $tableRowDivider;
        $this->numberOfColumns = $numberOfColumns;
    }


    public function render(): string
    {
        $htmlFragment = '';
        $style = $this->tableRowDivider->getStyle();
        if ($style->is(TableRowDividerStyle::LABEL_SPLITTED_ROW)) {
            $htmlFragment .= sprintf(
                '<tr><td colspan="%d" style="display: none;">&nbsp;</td></tr>',
                $this->numberOfColumns
            );
            $rowPattern = <<<PAT
<tr class="TableRowDivider">
  <td colspan="%d" style="text-align: center; padding: 0; height: auto; user-select: none; font-weight: bold;">%s</td>
</tr>
PAT;
        } else {
            // use LABEL_SINGLE_ROW by default
            $rowPattern = <<<PAT
<tr>
  <td colspan="%d" style="text-align: center; padding: 2px 0; height: auto; user-select: none;">
    <div class="TableRowDivider">%s</div>
  </td>
</tr>
PAT;
        }
        $htmlFragment .= sprintf($rowPattern, $this->numberOfColumns, $this->tableRowDivider->getLabel());

        return $htmlFragment;
    }
}
