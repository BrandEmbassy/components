<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript;

use Assert\Assertion;
use BrandEmbassy\Components\UiComponent;
use function array_map;
use function implode;

final class ConstantCollection implements UiComponent
{
    /**
     * @var Constant[]
     */
    private $constants;


    /**
     * @param Constant[] $constants
     */
    public function __construct(array $constants = [])
    {
        Assertion::allIsInstanceOf($constants, Constant::class);
        $this->constants = $constants;
    }


    public function addConstant(Constant $constant): void
    {
        $this->constants[] = $constant;
    }


    public function render(): string
    {
        return implode(
            '',
            array_map(
                static function (Constant $constant): string {
                    return $constant->render();
                },
                $this->constants
            )
        );
    }
}
