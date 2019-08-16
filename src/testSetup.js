/* eslint-disable no-console */
import { JSDOM } from "jsdom";
// Polyfills
import "../config/polyfills";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

global.__VERSION__ = require("../package.json").version;

configure({ adapter: new Adapter() });

/// /////
// JSDOM
const dom = new JSDOM("<html><head></head><body></body></html>");
const win = dom.window;
const doc = dom.window.document;

// Set our data
win.process = { env: process.env };

// propagateProperties(win, global);

global.shallow = shallow;
global.mount = mount;
global.render = render;
global.document = doc;
global.window = win;
global.navigator = {
  userAgent: "node.js"
};
