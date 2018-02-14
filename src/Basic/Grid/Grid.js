import React, { Component } from 'react';
import  '!style-loader!css-loader!../../styles/Base.css';
import  '!style-loader!css-loader!./GridDemo.css';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/styles/prism';
import styles from './../../App.css';

const code = 
`<div class="container"> 
  <div class="row">
    <div class="col-xs-3">
      ...
    </div>
    <div class="col-xs-4">
    ...
    </div>
    <div class="col-xs-3">
    ...
    </div>
  </div>
</div>
`;


export default class Grid extends Component {
  render() {
    return (
        <div className={styles.App}>
          <div className={styles.Static}>
            <div className="row">
              <div className="col-xs-12">
                <h2 className="h2">
                  Grid 
                </h2>
              </div>
            </div>
          </div>
          <div className={styles.Flex}>
          <div className="row">
            <div className="col-xs-12">
             
              .App__App have 100% width and 100% height<br /><br />  
              
              inside, you can have App__Static and App__Flex<br /> <br /> 

              Static stay fixed and Flex is posible to scroll - Example : this page<br /> <br /> 
           

              you can nest it using Flexcols or Flexrows - Example in Example/ExampleB
            </div>
          </div>
          <div className="row padding-20">
            <div className="col-xs-12">
              <h2 className="h2">
                Rows and columns 
              </h2>
            </div>

            <div className="col-xs-12">
              
            .Row is parent everytime<br /> <br /> 

            inside use columns <br /> <br /> 

            12 grid system or auto size col
 
              

            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`
  <div class="row">
    <div class="col-xs-3">
      ...
    </div>
    <div class="col-xs-4">
    ...
    </div>
    <div class="col-xs-3">
    ...
    </div>
  </div>
`}
          </SyntaxHighlighter> 
          </div>
          </div>
          <div className="container color6 center">
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
          <div className="row">
            <div class="col-xs-12 padding-">
              <h2 className="h2">class padding</h2>
              <h3 className="h3">columns have 10px left and 10px right padding bz default<br /></h3>
              <h3 className="h3">container and rows are without default padding<br />
              you can add padding class </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
            {`<div class="row around-xs">
  <div class="col-xs-2 padding-5">
    .padding-5 
  </div>
  <div class="col-xs-2 padding-10">
    .padding-10 
  </div>
  <div class="col-xs-2 padding-15">
    .padding-15 
  </div>
  <div class="col-xs-2 padding-20">
    .padding-20 
  </div>
</div>
`}
          </SyntaxHighlighter> 
          </div>
          </div>

          <div className="row around-xs">
            <div className="col-xs-2 color7 padding-5">
            .padding-5 
            </div>
            <div className="col-xs-2 color7 padding-10">
            .padding-10 
            </div>
            <div className="col-xs-2 color7 padding-15">
            .padding-15 
            </div>
            <div className="col-xs-2 color7 padding-20">
            .padding-20 
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h2 className="h2">columns</h2>
        
              <h3 className="h3">resize window to see diference between xs md lg</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row">
<div class="col-xs-8 col-md-4 col-lg-2">
  col-xs-8 col-md-4 col-lg-2 
</div>
</div>
<div class="row">
<div class="col-xs-12 col-md-10 col-lg-6" >
  col-xs-12 col-md-10 col-lg-6
</div>
</div>
<div class="row">
<div class="col-xs-6 col-md-8 col-lg-12" >
  col-xs-6 col-md-8 col-lg-12
</div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div className="row">
            <div className="col-xs-8 col-md-4 col-lg-2 color padding-20">
                col-xs-8 col-md-4 col-lg-2 
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-10 col-lg-6 color padding-20" >
              col-xs-12 col-md-10 col-lg-6
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-8 col-lg-12 color padding-20" >
              col-xs-6 col-md-8 col-lg-12
            </div>
          </div>
    



          <div className="row">
            <div className="col-xs-6">
              <h2 className="h2">Offset</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row">
  <div class="col-xs-offset-9 col-xs-3">
    col-xs-offset-9 col-xs-3 
  </div>
  </div>

  <div class="row">
  <div class="col-xs-offset-6 col-xs-6">
    col-xs-offset-6 col-xs-6
  </div>
  </div>

  <div class="row">
  <div class="col-xs-offset-3 col-xs-6">
    col-xs-offset-3 col-xs-6
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div class="row">
            <div class="col-xs-offset-9 col-xs-3 color padding-20 ">
              col-xs-offset-9 col-xs-3 
            </div>
          </div>

          <div class="row">
            <div class="col-xs-offset-6 col-xs-6 color padding-20 ">
              col-xs-offset-6 col-xs-6
            </div>
          </div>

          <div class="row">
            <div class="col-xs-offset-3 col-xs-6 color padding-20 ">
              col-xs-offset-3 col-xs-6
            </div>
          </div>
       

          <div className="row">
            <div class="col-xs-12">
              <h2 className="h2">Auto Width</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div className="row">
  <div class="col-xs">
    col-xs 
  </div>
  <div class="col-xs">
    col-xs 
  </div>
  <div class="col-xs">
    col-xs 
  </div>
</div>

<div className="row">
  <div class="col-xs">
    col-xs 
  </div>
  <div class="col-xs">
    col-xs 
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div className="row">
            <div class="col-xs color padding-20 ">
              col-xs 
            </div>
            <div class="col-xs color3 padding-20 ">
              col-xs 
            </div>
            <div class="col-xs color padding-20 ">
              col-xs 
            </div>
          </div>

          <div className="row">
            <div class="col-xs color padding-20 ">
              col-xs 
            </div>
            <div class="col-xs color2 padding-20 ">
              col-xs 
            </div>
          </div>

          <div className="row">
            <div class="col-xs color padding-20 ">
              col-xs 
            </div>
            <div class="col-xs color2 padding-20 ">
              col-xs 
            </div>

            <div class="col-xs color padding-20 ">
              col-xs 
            </div>
            <div class="col-xs color2 padding-20 ">
              col-xs 
            </div>

            <div class="col-xs color padding-20 ">
              col-xs 
            </div>
            <div class="col-xs color2 padding-20 ">
              col-xs 
            </div>
          </div>

          <div className="row">
            <div class="col-xs-12">
              <h2 className="h2">
              Alignment
              </h2>

              <h3 className="h3">
                div .row start-xs
              </h3>
            </div>
          </div>
            
          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row start-xs">
  <div class="col-xs-6">
    .start-
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>
          
          <div className="row start-xs color4">
            <div className="col-xs-6 color3 padding-10 ">
              .start-
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 ">
              <h3 className="h3">
                div .row center-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row center-xs">
  <div class="col-xs-6">
    .center-
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div className="row center-xs color4">
            <div className="col-xs-6 color3 padding-10">
              .center-
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h3 className="h3">
                div .row end-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row end-xs">
  <div class="col-xs-6">
    .end-
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>


          <div className="row end-xs color4">
            <div className="col-xs-6 color3 padding-10">
              .end-
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h3 className="h3">
                div .row top-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row top-xs">
  <div class="col-xs-6">

  ...
  ...
  ...

  </div>
  <div class="col-xs-6">
    .top-
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div className="row top-xs color4">
            <div className="col-xs-6 color2">
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-xs-6 color3 padding-10">
              .top-
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <h3 className="h3">
                div .row middle-xs
              </h3>
            </div>
          </div>


          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row middle-xs">
  <div class="col-xs-6">

  ...
  ...
  ...

  </div>
  <div class="col-xs-6">
    .middle-
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div className="row middle-xs color4">
            <div className="col-xs-6 color2">
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-xs-6 color3  padding-10">
              .middle-
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h3 className="h3">
                div .row bottom-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div className="row bottom-xs">
  <div className="col-xs-6">

  ...
  ...
  ...

  </div>
  <div className="col-xs-6">
    .bottom-
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div className="row bottom-xs color4">
            <div className="col-xs-6 color2">
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div className="col-xs-6 color3 padding-10">
              .bottom-
            </div>
          </div>


          <div className="row">
            <div className="col-xs-12">
              <h2 className="h2">
                Distribution
              </h2>
              
              <h3 className="h3">
                div .row around-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row around-xs">
  <div class="col-xs-2">
    col-xs-2
  </div>
  <div class="col-xs-2">
    col-xs-2
  </div>
  <div class="col-xs-2">
    col-xs-2
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div class="row around-xs color4">
            <div class="col-xs-2 color3 padding-10">
              col-xs-2
            </div>
            <div class="col-xs-2 color3 padding-10">
              col-xs-2
            </div>
            <div class="col-xs-2 color3 padding-10">
              col-xs-2
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h3 className="h3">
                div .row between-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row between-xs">
  <div class="col-xs-2">
    col-xs-2
  </div>
  <div class="col-xs-2">
    col-xs-2
  </div>
  <div class="col-xs-2">
    col-xs-2
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div class="row between-xs color4">
            <div class="col-xs-2 color3 padding-10">
              col-xs-2
            </div>
            <div class="col-xs-2 color3 padding-10">
              col-xs-2
            </div>
            <div class="col-xs-2 color3 padding-10">
              col-xs-2
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h2 className="h2">Reordering</h2>
              
              <h3 className="h3">
                second .col-xs-2 have .first-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row around-xs">
  <div class="col-xs-2">
    1
  </div>
  <div class="col-xs-2 first-xs">
    2
  </div>
  <div class="col-xs-2">
    3
  </div>
  <div class="col-xs-2">
    4
  </div>
  <div class="col-xs-2">
    5
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div class="row around-xs color4">
            <div class="col-xs-2 color3 padding-10">
              1
            </div>
            <div class="col-xs-2 first-xs color2">
              2
            </div>
            <div class="col-xs-2 color3 padding-10">
              3
            </div>
            <div class="col-xs-2 color3 padding-10">
              4
            </div>
            <div class="col-xs-2 color3 padding-10">
              5
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h3 className="h3">
                second .col-xs-2 have .last-xs
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row">
  <div class="col-xs-2">
    1
  </div>
  <div class="col-xs-2 last-xs">
    2
  </div>
  <div class="col-xs-2">
    3
  </div>
  <div class="col-xs-2">
    4
  </div>
  <div class="col-xs-2">
    5
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div class="row around-xs color4">
            <div class="col-xs-2 color3 padding-10">
              1
            </div>
            <div class="col-xs-2 last-xs color2 padding-10">
              2
            </div>
            <div class="col-xs-2 color3 padding-10">
              3
            </div>
            <div class="col-xs-2 color3 padding-10">
              4
            </div>
            <div class="col-xs-2 color3 padding-10">
              5
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h2 className="h2">Reversing</h2>
              
              <h3 className="h3">
                div .row .reverse
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
          <SyntaxHighlighter language='jsx' style={base16AteliersulphurpoolLight}>
{`<div class="row reverse">
  <div class="col-xs-2">
    1
  </div>
  <div class="col-xs-2">
    2
  </div>
  <div class="col-xs-2">
    3
  </div>
  <div class="col-xs-2">
    4
  </div>
  <div class="col-xs-2">
    5
  </div>
</div>`}
          </SyntaxHighlighter>
          </div>
          </div>

          <div class="row reverse around-xs color4">
            <div class="col-xs-2 color3 padding-10">
              1
            </div>
            <div class="col-xs-2 color3 padding-10">
              2
            </div>
            <div class="col-xs-2 color3 padding-10">
              3
            </div>
            <div class="col-xs-2 color3 padding-10">
              4
            </div>
            <div class="col-xs-2 color3 padding-10">
              5
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}
