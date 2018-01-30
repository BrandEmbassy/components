import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import  '!style-loader!css-loader!./GridDemo.css';

export default class Grid extends Component {
  render() {
    return (
        <div className="container">

          <div className="row">
            <div className="HeaderBox">
              <div className="step">Grid</div>
              <div className="step">12 column grid</div>
            </div>
          </div>

          <div className="container color6 center">
          <h3 className="h3">.container</h3><br />
            <div className="row around-xs color5">
              <div class="col-xs-12 center">
                <h3 className="h3">.row</h3><br />
              </div>

              <div class="col-xs-3 color center">
                .col-xs-3<br />

                <h3 className="h3">xs</h3><br />
                ( for all size )
              </div>
              <div class="col-xs-4 color center">
                .col-md-4 <br />
                <h3 className="h3">md</h3><br />
                ( rewriting XS parameters when width is 640px + )<br />
                
                
              </div>
              <div class="col-xs-3 color center">
                .col-lg-3 <br />
                <h3 className="h3">lg</h3><br />
                ( ... width 960px + )
              </div>
            </div>
          </div>

          <br /><br />


          <div className="row">
            <div class="col-xs-1 col-md-1 col-lg-1 color">
              .col-xs-1 
            </div>
          </div>
          <div className="row">
            <div class="col-xs-6 col-md-6 col-lg-6 color" >
               .col-xs-6
            </div>
          </div>
          <div className="row">
            <div class="col-xs-12 col-md-12 col-lg-12 color" >
               .col-xs-6
            </div>
          </div>
    

          <br /><br />

          <div className="row">
            <div className="HeaderBox">
              <div className="step">Grid</div>
              <div className="step">Offset</div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-offset-9 col-xs-3 color">
              col-xs-offset-9 col-xs-3 
            </div>
          </div>

          <div class="row">
            <div class="col-xs-offset-6 col-xs-6 color">
              col-xs-offset-6 col-xs-6
            </div>
          </div>

          <div class="row">
            <div class="col-xs-offset-3 col-xs-6 color">
              col-xs-offset-3 col-xs-6
            </div>
          </div>
       
          <br /><br />
          <div className="row">
            <div className="HeaderBox">
              <div className="step">Grid</div>
              <div className="step">Auto Width </div>
            </div>

          </div>
          <div className="row">
            <div class="col-xs color">
              col-xs 
            </div>
            <div class="col-xs color3">
              col-xs 
            </div>
            <div class="col-xs color">
              col-xs 
            </div>
          </div>

          <div className="row">
            <div class="col-xs color">
              col-xs 
            </div>
            <div class="col-xs color2">
              col-xs 
            </div>
          </div>

          <div className="row">
            <div class="col-xs color">
              col-xs 
            </div>
            <div class="col-xs color2">
              col-xs 
            </div>

            <div class="col-xs color">
              col-xs 
            </div>
            <div class="col-xs color2">
              col-xs 
            </div>

            <div class="col-xs color">
              col-xs 
            </div>
            <div class="col-xs color2">
              col-xs 
            </div>
          </div>

          <br /><br />
          <div className="row">
            <div className="HeaderBox">
              <div className="step">Grid</div>
              <div className="step">Alignment</div>
            </div>
          </div>
          
          <h3 className="h3">
            div .row start-xs
          </h3>
          <div class="row start-xs color4">
            <div class="col-xs-6 color3">
              .start-
            </div>
          </div>

          <h3 className="h3">
            div .row center-xs
          </h3>
          <div className="row center-xs color4">
            <div className="col-xs-6 color3">
              .center-
            </div>
          </div>

          <h3 className="h3">
            div .row end-xs
          </h3>
          <div className="row end-xs color4">
            <div className="col-xs-6 color3">
              .end-
            </div>
          </div>

            <br />
            <br />
            <br />
            <br />
            <br />

          <h3 className="h3">
            div .row top-xs
          </h3>
          <div className="row top-xs color4">
            <div className="col-xs-6 color3">
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-xs-6 color3">
              .top-
            </div>
          </div>

          <h3 className="h3">
            div .row middle-xs
          </h3>
          <div className="row middle-xs color4">
            <div className="col-xs-6 color3">
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-xs-6 color3">
              .middle-
            </div>
          </div>

          <h3 className="h3">
            div .row bottom-xs
          </h3>
          <div className="row bottom-xs color4">
            <div className="col-xs-6 color3">
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-xs-6 color3">
              .bottom-
            </div>
          </div>


          <br /><br />
          <div className="row">
            <div className="HeaderBox">
              <div className="step">Grid</div>
              <div className="step">Distribution</div>
            </div>
          </div>
          
          <h3 className="h3">
            div .row around-xs
          </h3>
          <div class="row around-xs color4">
            <div class="col-xs-2 color3">
              col-xs-2
            </div>
            <div class="col-xs-2 color3">
              col-xs-2
            </div>
            <div class="col-xs-2 color3">
              col-xs-2
            </div>
          </div>

          <h3 className="h3">
            div .row between-xs
          </h3>
          <div class="row between-xs color4">
            <div class="col-xs-2 color3">
              col-xs-2
            </div>
            <div class="col-xs-2 color3">
              col-xs-2
            </div>
            <div class="col-xs-2 color3">
              col-xs-2
            </div>
          </div>


          <br /><br />
          <div className="row">
            <div className="HeaderBox">
              <div className="step">Grid</div>
              <div className="step">Reordering</div>
            </div>
          </div>
          
          <h3 className="h3">
            second .col-xs-2 have .first-xs
          </h3>
          <div class="row around-xs color4">
            <div class="col-xs-2 color3">
              1
            </div>
            <div class="col-xs-2 first-xs color2">
              2
            </div>
            <div class="col-xs-2 color3">
              3
            </div>
            <div class="col-xs-2 color3">
              4
            </div>
            <div class="col-xs-2 color3">
              5
            </div>
          </div>

          <h3 className="h3">
            second .col-xs-2 have .last-xs
          </h3>
          <div class="row around-xs color4">
            <div class="col-xs-2 color3">
              1
            </div>
            <div class="col-xs-2 last-xs color2">
              2
            </div>
            <div class="col-xs-2 color3">
              3
            </div>
            <div class="col-xs-2 color3">
              4
            </div>
            <div class="col-xs-2 color3">
              5
            </div>
          </div>


          <br /><br />
          <div className="row">
            <div className="HeaderBox">
              <div className="step">Grid</div>
              <div className="step">Reversing</div>
            </div>
          </div>
          
          <h3 className="h3">
            div .row .reverse
          </h3>
          <div class="row reverse around-xs color4">
            <div class="col-xs-2 color3">
              1
            </div>
            <div class="col-xs-2 color3">
              2
            </div>
            <div class="col-xs-2 color3">
              3
            </div>
            <div class="col-xs-2 color3">
              4
            </div>
            <div class="col-xs-2 color3">
              5
            </div>
          </div>

      </div>

    );
  }
}
