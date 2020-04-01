import React, { PureComponent } from "react";
import "../../package/components/Base.css"; //eslint-disable-line
import Channel from "./../../package/components/Channel/Channel";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/styles/prism";
import { renderToString } from "react-dom/server";
import beautify from "js-beautify";

const importComponent = `import { Channel } from 'components';`;

export default class ChannelDemo extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="row padding-20">
          <div className="col-xs-12 ">
            <h2 className="h2">Channel</h2>
            <h3 className="h3">{importComponent}</h3>
          </div>

          <div className="col-xs-12 padding-10">
            <h3 className="h3">default (size 24px, type default)</h3>
            <Channel />
          </div>

          <div className="col-xs-12 padding-10">
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Channel type="facebook" />))}
            </SyntaxHighlighter>
          </div>

          <div className="col-xs-12 padding-10">
            <h3 className="h3">Size</h3>
            <h4 className="h4">for 60px use class size60</h4>
            <h4 className="h4">for 40px use class size40</h4>
            <h4 className="h4">24px is default</h4>
            <h4 className="h4">for 20px use class size20</h4>
            <h4 className="h4">for 16px use class size16</h4>
            <Channel type="facebook" size="XL" />
            <Channel type="facebook" size="L" />
            <Channel type="facebook" />
            <Channel type="facebook" size="S" />
            <Channel type="facebook" size="XS" />
          </div>

          <div className="col-xs-12 padding-10">
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(
                renderToString(<Channel type="facebook" size="XL" />)
              )}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="row padding-10">
          <div className="col-xs-12">
            <h3 className="h3">facebook-dm</h3>
            <h4 className="h4"> add class facebook-dm</h4>
            <Channel type="facebook-dm" size="XL" />
            <Channel type="facebook-dm" size="L" />
            <Channel type="facebook-dm" />
            <Channel type="facebook-dm" size="S" />
            <Channel type="facebook-dm" size="XS" />
          </div>

          <div className="col-xs-12 padding-10">
            <SyntaxHighlighter
              language="jsx"
              style={base16AteliersulphurpoolLight}
            >
              {beautify.html(renderToString(<Channel type="facebook-dm" />))}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">facebook-messenger</h3>
            <Channel type="facebook-messenger" size="XL" />
            <Channel type="facebook-messenger" size="L" />
            <Channel type="facebook-messenger" />
            <Channel type="facebook-messenger" size="S" />
            <Channel type="facebook-messenger" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">twitter</h3>
            <Channel type="twitter" size="XL" />
            <Channel type="twitter" size="L" />
            <Channel type="twitter" />
            <Channel type="twitter" size="S" />
            <Channel type="twitter" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">twitter-dm</h3>
            <Channel type="twitter-dm" size="XL" />
            <Channel type="twitter-dm" size="L" />
            <Channel type="twitter-dm" />
            <Channel type="twitter-dm" size="S" />
            <Channel type="twitter-dm" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">instagram</h3>
            <Channel type="instagram" size="XL" />
            <Channel type="instagram" size="L" />
            <Channel type="instagram" />
            <Channel type="instagram" size="S" />
            <Channel type="instagram" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">instagram-dm</h3>
            <Channel type="instagram-dm" size="XL" />
            <Channel type="instagram-dm" size="L" />
            <Channel type="instagram-dm" />
            <Channel type="instagram-dm" size="S" />
            <Channel type="instagram-dm" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">google</h3>
            <Channel type="google" size="XL" />
            <Channel type="google" size="L" />
            <Channel type="google" />
            <Channel type="google" size="S" />
            <Channel type="google" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">google-dm</h3>
            <Channel type="google-dm" size="XL" />
            <Channel type="google-dm" size="L" />
            <Channel type="google-dm" />
            <Channel type="google-dm" size="S" />
            <Channel type="google-dm" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">google-search</h3>
            <Channel type="google-search" size="XL" />
            <Channel type="google-search" size="L" />
            <Channel type="google-search" />
            <Channel type="google-search" size="S" />
            <Channel type="google-search" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">youtube</h3>
            <Channel type="youtube" size="XL" />
            <Channel type="youtube" size="L" />
            <Channel type="youtube" />
            <Channel type="youtube" size="S" />
            <Channel type="youtube" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">linkedin</h3>
            <Channel type="linkedin" size="XL" />
            <Channel type="linkedin" size="L" />
            <Channel type="linkedin" />
            <Channel type="linkedin" size="S" />
            <Channel type="linkedin" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">livechat</h3>
            <Channel type="livechat" size="XL" />
            <Channel type="livechat" size="L" />
            <Channel type="livechat" />
            <Channel type="livechat" size="S" />
            <Channel type="livechat" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">email</h3>
            <Channel type="email" size="XL" />
            <Channel type="email" size="L" />
            <Channel type="email" />
            <Channel type="email" size="S" />
            <Channel type="email" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">forum</h3>
            <Channel type="forum" size="XL" />
            <Channel type="forum" size="L" />
            <Channel type="forum" />
            <Channel type="forum" size="S" />
            <Channel type="forum" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">vkontakte</h3>
            <Channel type="vkontakte" size="XL" />
            <Channel type="vkontakte" size="L" />
            <Channel type="vkontakte" />
            <Channel type="vkontakte" size="S" />
            <Channel type="vkontakte" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">vkontakte-dm</h3>
            <Channel type="vkontakte-dm" size="XL" />
            <Channel type="vkontakte-dm" size="L" />
            <Channel type="vkontakte-dm" />
            <Channel type="vkontakte-dm" size="S" />
            <Channel type="vkontakte-dm" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">listening</h3>
            <Channel type="listening" size="XL" />
            <Channel type="listening" size="L" />
            <Channel type="listening" />
            <Channel type="listening" size="S" />
            <Channel type="listening" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">kbm-1</h3>
            <Channel type="kbm-1" size="XL" />
            <Channel type="kbm-1" size="L" />
            <Channel type="kbm-1" />
            <Channel type="kbm-1" size="S" />
            <Channel type="kbm-1" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">whatsapp</h3>
            <Channel type="whatsapp" size="XL" />
            <Channel type="whatsapp" size="L" />
            <Channel type="whatsapp" />
            <Channel type="whatsapp" size="S" />
            <Channel type="whatsapp" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">viber</h3>
            <Channel type="viber" size="XL" />
            <Channel type="viber" size="L" />
            <Channel type="viber" />
            <Channel type="viber" size="S" />
            <Channel type="viber" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">pinterest</h3>
            <Channel type="pinterest" size="XL" />
            <Channel type="pinterest" size="L" />
            <Channel type="pinterest" />
            <Channel type="pinterest" size="S" />
            <Channel type="pinterest" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">tumblr</h3>
            <Channel type="tumblr" size="XL" />
            <Channel type="tumblr" size="L" />
            <Channel type="tumblr" />
            <Channel type="tumblr" size="S" />
            <Channel type="tumblr" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">snapchat</h3>
            <Channel type="snapchat" size="XL" />
            <Channel type="snapchat" size="L" />
            <Channel type="snapchat" />
            <Channel type="snapchat" size="S" />
            <Channel type="snapchat" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">ok-ru</h3>
            <Channel type="ok-ru" size="XL" />
            <Channel type="ok-ru" size="L" />
            <Channel type="ok-ru" />
            <Channel type="ok-ru" size="S" />
            <Channel type="ok-ru" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">kik</h3>
            <Channel type="kik" size="XL" />
            <Channel type="kik" size="L" />
            <Channel type="kik" />
            <Channel type="kik" size="S" />
            <Channel type="kik" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">slack</h3>
            <Channel type="slack" size="XL" />
            <Channel type="slack" size="L" />
            <Channel type="slack" />
            <Channel type="slack" size="S" />
            <Channel type="slack" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">amazon</h3>
            <Channel type="amazon" size="XL" />
            <Channel type="amazon" size="L" />
            <Channel type="amazon" />
            <Channel type="amazon" size="S" />
            <Channel type="amazon" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">google-play</h3>
            <Channel type="google-play" size="XL" />
            <Channel type="google-play" size="L" />
            <Channel type="google-play" />
            <Channel type="google-play" size="S" />
            <Channel type="google-play" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">google-maps</h3>
            <Channel type="google-maps" size="XL" />
            <Channel type="google-maps" size="L" />
            <Channel type="google-maps" />
            <Channel type="google-maps" size="S" />
            <Channel type="google-maps" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">sms</h3>
            <Channel type="sms" size="XL" />
            <Channel type="sms" size="L" />
            <Channel type="sms" />
            <Channel type="sms" size="S" />
            <Channel type="sms" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">rss</h3>
            <Channel type="rss" size="XL" />
            <Channel type="rss" size="L" />
            <Channel type="rss" />
            <Channel type="rss" size="S" />
            <Channel type="rss" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">telegram</h3>
            <Channel type="telegram" size="XL" />
            <Channel type="telegram" size="L" />
            <Channel type="telegram" />
            <Channel type="telegram" size="S" />
            <Channel type="telegram" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">apple</h3>
            <Channel type="apple" size="XL" />
            <Channel type="apple" size="L" />
            <Channel type="apple" />
            <Channel type="apple" size="S" />
            <Channel type="apple" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">apple-apps</h3>
            <Channel type="apple-apps" size="XL" />
            <Channel type="apple-apps" size="L" />
            <Channel type="apple-apps" />
            <Channel type="apple-apps" size="S" />
            <Channel type="apple-apps" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">wechat</h3>
            <Channel type="wechat" size="XL" />
            <Channel type="wechat" size="L" />
            <Channel type="wechat" />
            <Channel type="wechat" size="S" />
            <Channel type="wechat" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">voice</h3>
            <Channel type="voice" size="XL" />
            <Channel type="voice" size="L" />
            <Channel type="voice" />
            <Channel type="voice" size="S" />
            <Channel type="voice" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">contact-form</h3>
            <Channel type="contact-form" size="XL" />
            <Channel type="contact-form" size="L" />
            <Channel type="contact-form" />
            <Channel type="contact-form" size="S" />
            <Channel type="contact-form" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">livechat-contact-form</h3>
            <Channel type="livechat-contact-form" size="XL" />
            <Channel type="livechat-contact-form" size="L" />
            <Channel type="livechat-contact-form" />
            <Channel type="livechat-contact-form" size="S" />
            <Channel type="livechat-contact-form" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">line-message</h3>
            <Channel type="line-message" size="XL" />
            <Channel type="line-message" size="L" />
            <Channel type="line-message" />
            <Channel type="line-message" size="S" />
            <Channel type="line-message" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">rcs</h3>
            <Channel type="rcs" size="XL" />
            <Channel type="rcs" size="L" />
            <Channel type="rcs" />
            <Channel type="rcs" size="S" />
            <Channel type="rcs" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">apple-imessage</h3>
            <Channel type="apple-imessage" size="XL" />
            <Channel type="apple-imessage" size="L" />
            <Channel type="apple-imessage" />
            <Channel type="apple-imessage" size="S" />
            <Channel type="apple-imessage" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">co-browsing</h3>
            <Channel type="co-browsing" size="XL" />
            <Channel type="co-browsing" size="L" />
            <Channel type="co-browsing" />
            <Channel type="co-browsing" size="S" />
            <Channel type="co-browsing" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">in-app-messaging</h3>
            <Channel type="in-app-messaging" size="XL" />
            <Channel type="in-app-messaging" size="L" />
            <Channel type="in-app-messaging" />
            <Channel type="in-app-messaging" size="S" />
            <Channel type="in-app-messaging" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">kakao-talk</h3>
            <Channel type="kakao-talk" size="XL" />
            <Channel type="kakao-talk" size="L" />
            <Channel type="kakao-talk" />
            <Channel type="kakao-talk" size="S" />
            <Channel type="kakao-talk" size="XS" />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">tango</h3>
            <Channel type="tango" size="XL" />
            <Channel type="tango" size="L" />
            <Channel type="tango" />
            <Channel type="tango" size="S" />
            <Channel type="tango" size="XS" />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <h3 className="h3">isGrayscale</h3>
            <Channel type="facebook" size="XL" isGrayscale />
            <Channel type="facebook" size="L" isGrayscale />
            <Channel type="facebook" isGrayscale />
            <Channel type="facebook" size="S" isGrayscale />
            <Channel type="facebook" size="XS" isGrayscale />
          </div>

          <div className="col-xs-12 col-md-6 col-lg-4 padding-20">
            <Channel type="apple-apps-reviews" size="XL" />
            <Channel type="line" size="XL" />
            <Channel type="twilio" size="XL" />
            <Channel type="apple-business" size="XL" />
            <Channel type="we-chat" size="XL" />
          </div>
        </div>
      </div>
    );
  }
}
