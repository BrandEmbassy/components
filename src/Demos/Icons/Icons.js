import React from "react";
import "../../package/components/Base.css"; //eslint-disable-line
import styles from "./Icons.css";

const copyIcon = e => {
  const element = document.getElementById("clipboardHelper");
  element.value = e.target.className;
  element.focus();
  element.select();
  document.execCommand("copy");
  alert(`"${element.value}" was copied to clipboard`);
};

export default function Icons() {
  const icons = [
    "be-icon-arrows",

    "be-icon-inbound",

    "be-icon-outbound",

    "be-icon-hide",
    "be-icon-eye-slash",

    "be-icon-trash",

    "be-icon-pencil",

    "be-icon-check",

    "be-icon-cross",

    "be-icon-more",

    "be-icon-plus",

    "be-icon-mail",

    "be-icon-linkedin",

    "be-icon-youtube",

    "be-icon-facebook",

    "be-icon-twitter",

    "be-icon-messenger",

    "be-icon-gplus",

    "be-icon-livechat",

    "be-icon-forum",

    "be-icon-copy",

    "be-icon-long-arrow-left",

    "be-icon-vk",

    "be-icon-search",

    "be-icon-calendar-o",

    "be-icon-calendar",

    "be-icon-refresh",

    "be-icon-reply",

    "be-icon-external-link",

    "be-icon-download",

    "be-icon-user-secret",

    "be-icon-users",

    "be-icon-link",

    "be-icon-info-circle",

    "be-icon-spinner",

    "be-icon-arrow-right",

    "be-icon-arrow-down",

    "be-icon-icon-insta",

    "be-icon-activity",

    "be-icon-flags",

    "be-icon-foods",

    "be-icon-people",

    "be-icon-recent",

    "be-icon-symbols",

    "be-icon-places",

    "be-icon-nature",

    "be-icon-objects",

    "be-icon-expand",

    "be-icon-inbox",

    "be-icon-pending",

    "be-icon-starred",

    "be-icon-life-ring",

    "be-icon-sec-settings",

    "be-icon-arrow-left",

    "be-icon-resolved",

    "be-icon-sec-care",

    "be-icon-sec-crm",

    "be-icon-escalated",

    "be-icon-sec-reports",

    "be-icon-plus-1",

    "be-icon-flag",

    "be-icon-envelope",

    "be-icon-logout",

    "be-icon-be-symbol",

    "be-icon-lock",

    "be-icon-icon-dm",

    "be-icon-sec-engage",

    "be-icon-icon-cross",

    "be-icon-phone",

    "be-icon-video-camera",

    "be-icon-volume-off",

    "be-icon-volume-up",

    "be-icon-icon-minimize",

    "be-icon-zendesk",

    "be-icon-tag",

    "be-icon-sentiment",

    "be-icon-reply-2",

    "be-icon-random",

    "be-icon-repeat",

    "be-icon-alert",

    "be-icon-long-arrow-right",

    "be-icon-api",

    "be-icon-chevron-down",

    "be-icon-copy-1",

    "be-icon-drag-hor",

    "be-icon-drag-vert",

    "be-icon-gallery",

    "be-icon-menu",

    "be-icon-play",

    "be-icon-quick-replies",

    "be-icon-quit",

    "be-icon-redirect",

    "be-icon-store",

    "be-icon-text",

    "be-icon-multi-audio",

    "be-icon-multi-file",

    "be-icon-multi-image",

    "be-icon-multi-video",

    "be-icon-male",

    "be-icon-file",

    "be-icon-paperclip",

    "be-icon-exclamation-triangle",

    "be-icon-download-1",

    "be-icon-external-link-square",

    "be-icon-livechat-2",

    "be-icon-rating-1",

    "be-icon-rating-2",

    "be-icon-rating-3",

    "be-icon-rating-5",

    "be-icon-thumb-down",

    "be-icon-thumb-up",

    "be-icon-close-big",

    "be-icon-chevron-right",

    "be-icon-chevron-left",

    "be-icon-emoji",

    "be-icon-be-logo",

    "be-icon-rating-4",

    "be-icon-arrow-drop",

    "be-icon-file-drop",

    "be-icon-enlarge",

    "be-icon-mail-1",

    "be-icon-agent",

    "be-icon-moon",

    "be-icon-livechat-off",

    "be-icon-plug",

    "be-icon-bold",
    "be-icon-underline",
    "be-icon-italic",
    "be-icon-list-ul",
    "be-icon-list-ol",
    "be-icon-align-left",
    "be-icon-align-right",
    "be-icon-align-justify",
    "be-icon-align-center",
    "be-icon-chain-broken",
    "be-icon-sort-amount-asc",
    "be-icon-sort-amount-desc",
    "be-icon-page-export",
    "be-icon-briefcase",
    "be-icon-arrow-right-1",

    "be-icon-vcard",
    "be-icon-pinterest",
    "be-icon-tumblr",
    "be-icon-social-snapchat",
    "be-icon-slack",
    "be-icon-kik",
    "be-icon-amazon",
    "be-icon-search-1",
    "be-icon-whatsapp-logo",
    "be-icon-microphone",
    "be-icon-viber",
    "be-icon-odnoklassniki-logo",

    "be-icon-google-play",
    "be-icon-google",
    "be-icon-app-store",
    "be-icon-rss",
    "be-icon-telegram",
    "be-icon-apple",
    "be-icon-speech-bubble",
    "be-icon-map-marker",
    "be-icon-app-store-1",
    "be-icon-speech-bubble-1",
    "be-icon-if-line-message-2559802",
    "be-icon-if-66-wechat-1181189",
    "be-icon-align-left-1",

    "be-icon-sitemap",
    "be-icon-filter",
    "be-icon-triangle-down",
    "be-icon-triangle-up",
    "be-icon-sec-chatbot-builder",
    "be-icon-list-add",
    "be-icon-list",
    "be-icon-character",
    "be-icon-clipboard-pencil",
    "be-icon-file-text-o",
    "be-icon-file-text",
    "be-icon-pencil-square-o",

    "be-icon-baseline-send-24px"
  ];

  return (
    <div className="container">
      <p>Hover or click on the icon</p>
      <div className="row padding-20">
        <div className="col-xs-12">
          <div className={styles.Icons} onClick={copyIcon}>
            {icons.map(icon => (
              <div
                className={icon}
                style={{ cursor: "pointer" }}
                title={`Icon name: "${icon}"`}
              />
            ))}
          </div>
        </div>
      </div>
      <input
        id="clipboardHelper"
        style={{ position: "absolute", top: "-1000px" }}
      />
    </div>
  );
}
