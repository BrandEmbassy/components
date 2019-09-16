<?php declare(strict_types = 1);

namespace BrandEmbassy\Components\Javascript;

use BrandEmbassy\Components\Javascript\Value\IntValue;
use BrandEmbassy\Components\Javascript\Value\StringValue;
use BrandEmbassy\Components\SnapshotAssertTrait;
use PHPUnit\Framework\TestCase;

final class ConstantCollectionTest extends TestCase
{
    use SnapshotAssertTrait;


    public function testConstantCollectionIsRendered(): void
    {
        $collection = new ConstantCollection();
        $collection->addConstant(new Constant('foo', new StringValue('bar')));
        $collection->addConstant(new Constant('number', new IntValue(123)));

        $this->assertSnapshot(__DIR__ . '/__snapshots__/renderedConstantCollection.html', $collection);
    }
}
