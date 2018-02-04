import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';

export default class Typography extends Component {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12">
            <h1 className="h1">Typohgraphy .h1</h1>
          
            <h2 className="h2">Typohgraphy .h2</h2>
        
            <h3 className="h3">Typohgraphy .h3</h3>
          
            <h4 className="h4">Typohgraphy .h4</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <h2 className="h2">.p</h2>

            <p className="p">
              Paragraph Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus porttitor turpis ac leo. Nunc auctor. Vivamus porttitor turpis ac leo. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. Mauris tincidunt sem sed arcu. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Aliquam ante. Ut tempus purus at lorem. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Donec quis nibh at felis congue commodo. Aliquam ante. Fusce nibh. Phasellus faucibus molestie nisl. Nullam eget nisl. Integer in sapien. Nunc dapibus tortor vel mi dapibus sollicitudin. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. In dapibus augue non sapien.
            </p>

            <h2 className="h2">.justify</h2>

            <p className="p justify">
              Etiam quis quam. In convallis. Praesent in mauris eu tortor porttitor accumsan. Pellentesque arcu. In rutrum. Aenean fermentum risus id tortor. Ut tempus purus at lorem. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis condimentum augue id magna semper rutrum. Nulla non arcu lacinia neque faucibus fringilla. Fusce nibh.
              Etiam quis quam. In convallis. Praesent in mauris eu tortor porttitor accumsan. Pellentesque arcu. In rutrum. Aenean fermentum risus id tortor. Ut tempus purus at lorem. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Duis condimentum augue id magna semper rutrum. Nulla non arcu lacinia neque faucibus fringilla. Fusce nibh.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

