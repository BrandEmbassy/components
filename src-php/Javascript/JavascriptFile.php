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

    /**
     * @var ConstantCollection
     */
    private $configuration;


    public function __construct(string $filePath, ?ConstantCollection $configuration = null)
    {
        $this->filePath = $filePath;
        $this->configuration = $configuration ?? new ConstantCollection();
    }


    public function render(): string
    {
        return sprintf(
            '<script type="text/javascript">%s%s</script>',
            $this->configuration->render(),
            file_get_contents($this->filePath)
        );
    }
}
