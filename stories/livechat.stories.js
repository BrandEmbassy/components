import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object, boolean } from "@storybook/addon-knobs/react";

// @flow-skip-next-line
import "!style-loader!css-loader!video-react/dist/video-react.css"; //eslint-disable-line

import QuickReplies from "../src/package/components/ChatBot/Plugin/Element/QuickReplies";
import Button from "../src/package/components/ChatBot/Plugin/Element/Button";
import Heading from "../src/package/components/ChatBot/Plugin/Element/Heading";
import Image from "../src/package/components/ChatBot/Plugin/Element/Image";
import Text from "../src/package/components/ChatBot/Plugin/Element/Text";
import File from "../src/package/components/ChatBot/Plugin/Element/File";
import Plugin from "../src/package/components/ChatBot/Plugin";
import menuPluginData from "./__fixtures__/menuPluginData.json";

const repliesButtons = [
  {
    id: "Akm0hRAiX",
    type: "TEXT",
    text: "Button 1",
    postback: "click-on-button-1"
  },
  {
    id: "Nkm0hRAiE",
    type: "BUTTON",
    text: "Button 1",
    postback: "click-on-button-1"
  },
  {
    id: "TkGJ6CAiN",
    type: "BUTTON",
    text: "Button 2",
    postback: "click-on-button-2"
  },
  {
    id: "EyCyTRCi4",
    type: "BUTTON",
    text: "Button 3",
    postback: "click-on-button-3"
  }
];

const quickReplies = [
  {
    id: "Ukm0hRAiA",
    type: "QUICK_REPLIES",
    elements: repliesButtons
  }
];

const menuElement = {
  id: "Ek4tPy1h4",
  type: "MENU",
  elements: [
    { id: "Uk4tPy1h2", type: "IMAGE", url: "https://picsum.photos/300/150" },
    { id: "Ck4tPy1h3", type: "TITLE", text: "Hello!" },
    {
      id: "Ek4tPy1h1",
      type: "TEXT",
      text: ".Lorem Impsum.. "
    },
    {
      id: "Nkm0hRAiE",
      type: "BUTTON",
      text: "Click me!",
      postback: "click-on-button-1"
    },
    {
      id: "NkGJ6CAiN",
      type: "BUTTON",
      text: "No click me!",
      postback: "click-on-button-2"
    },
    {
      id: "EyCyTRCi4",
      type: "BUTTON",
      text: "Aww don`t click on me",
      postback: "click-on-button-3"
    }
  ]
};

const menuElement2 = {
  id: "Ek4tPy1h4",
  type: "MENU",
  elements: [
    { id: "Uk4tPy1h2", type: "IMAGE", url: "https://picsum.photos/300/150" },
    { id: "Ck4tPy1h3", type: "TITLE", text: "Hello!" },
    {
      id: "Ek4tPy1h1",
      type: "TEXT",
      text:
        ".Lorem Impsum.. .Lorem Impsum...Lorem Impsum.. .Lorem Impsum...Lorem Impsum. ..Lorem Impsum.. .Lorem Impsum...Lorem Impsum.. .Lorem Impsum...Lorem Impsum. ..Lorem Impsum.. .Lorem Impsum...Lorem Impsum.. .Lorem Impsum...Lorem Impsum. ..Lorem Impsum.. .Lorem Impsum...Lorem Impsum.. .Lorem Impsum...Lorem Impsum. .."
    },
    {
      id: "Nkm0hRAiE",
      type: "BUTTON",
      text: "Click me!",
      postback: "click-on-button-1"
    },
    {
      id: "NkGJ6CAiN",
      type: "BUTTON",
      text: "No click me!",
      postback: "click-on-button-2"
    },
    {
      id: "EyCyTRCi4",
      type: "BUTTON",
      text: "Aww don`t click on me",
      postback: "click-on-button-3"
    }
  ]
};

const textAndButtons = {
  id: "Ek4tPy1h4",
  type: "TEXT_AND_BUTTONS",
  elements: [
    { id: "Ek4tPy1h1", type: "TEXT", text: "Lorem Impsum..." },
    {
      id: "Nkm0hRAiE",
      type: "BUTTON",
      text: "Click me!",
      postback: "click-on-button-1"
    },
    {
      id: "NkGJ6CAiN",
      type: "BUTTON",
      text: "No click me!",
      postback: "click-on-button-2"
    },
    {
      id: "EyCyTRCi4",
      type: "BUTTON",
      text: "Aww don`t click on me",
      postback: "click-on-button-3"
    }
  ]
};

const galleryElements = [
  { ...menuElement, id: "Ek4tPy1h4" },
  {
    ...menuElement2,
    id: "Ek4tPy1h5"
  },
  { ...menuElement, id: "Ek4tPy1h6" }
];

const withGrayBackground = story => {
  return <div style={{ background: "#f0f0f0" }}>{story()}</div>;
};

const clickHandler = (postback, label) => console.log(postback, label);

storiesOf("Chatbots elements", module)
  .addDecorator(withKnobs)
  .addDecorator(withGrayBackground)

  .add("Button", () => <Button label={text("label", "Click me!")} />)
  .add("Heading", () => <Heading content={text("content", "Lorem Ipsum!")} />)
  .add("Image", () => (
    <Image src={text("src", "http://via.placeholder.com/350x150")} />
  ))
  .add("Text", () => <Text content={text("content", "Hello world!")} />)
  .add("QuickReplies", () => (
    <QuickReplies
      elements={object("elements", repliesButtons)}
      onClick={clickHandler}
    />
  ))
  .add("File - basic", () => (
    <File
      url="http://via.placeholder.com/350x150"
      mimeType="audio/mp3"
      title="file.txt"
    />
  ))
  .add("File - image", () => (
    <File url="http://via.placeholder.com/350x150" mimeType="image/jpeg" />
  ))
  .add("File - newImage", () => (
    <File
      url="http://via.placeholder.com/350x150"
      mimeType="image/jpeg"
      filename="file.txt"
      topLevel
    />
  ))
  .add("File - video", () => (
    <div>
      <p>
        <strong>
          You have to install <code>vireo-react</code> package to your project
          and import <code>video-react/dist/video-react.css'</code> in your
          project
        </strong>
      </p>
      <p>
        <File
          url="https://www.w3schools.com/tags/movie.mp4"
          mimeType="video/mp4"
        />
      </p>
    </div>
  ));

storiesOf("Chatbots Plugins", module)
  .addDecorator(withKnobs)
  .add("Menu", () => (
    <Plugin
      elements={object("elements", [menuElement])}
      onClick={clickHandler}
    />
  ))
  .add("Gallery", () => (
    <Plugin
      disableCarusel={boolean("disableCarusel", false)}
      elements={object("elements", galleryElements)}
      onClick={clickHandler}
    />
  ))
  .add("Text and buttons", () => (
    <Plugin
      elements={object("elements", [textAndButtons])}
      onClick={clickHandler}
    />
  ))
  .add("Quick Replies", () => (
    <Plugin
      elements={object("elements", quickReplies)}
      onClick={clickHandler}
      hideButtons={boolean("hideButtons", false)}
    />
  ))
  .add("Menu plugin with an image", () => (
    <Plugin
      elements={menuPluginData.elements}
      onClick={clickHandler}
      hideButtons={boolean("hideButtons", false)}
    />
  ));
