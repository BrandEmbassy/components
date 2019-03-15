<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript;

use BrandEmbassy\Components\UiComponent;
use function file_get_contents;
use function sprintf;

final class JavascriptFile implements UiComponent
{
    /**
     * @var string
     */
    private $filePath;


    public function __construct(string $filePath)
    {
        $this->filePath = $filePath;
    }


    public function render(): string
    {
        return sprintf('<script type="text/javascript">%s</script>', file_get_contents($this->filePath));
    }
}
