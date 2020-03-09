<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Typography;

use BrandEmbassy\Components\UiComponent;
use function htmlspecialchars;

final class CodeSnippet implements UiComponent
{
    /**
     * @var string
     */
    private $code;


    public function __construct(string $code)
    {
        $this->code = $code;
    }


    public function render(): string
    {
        return '
        <pre style="
                white-space: pre-wrap;
                box-sizing: border-box;
                background-color: #f4f4f4;
                width: 100%;
                margin-top: 20px;
                padding: 14px;
            ">
            ' . htmlspecialchars($this->code) . '
        </pre>
        ';
    }
}
