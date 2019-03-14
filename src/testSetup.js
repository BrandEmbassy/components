/* eslint-disable no-console */
import { JSDOM } from 'jsdom'
// Polyfills
import '../config/polyfills'
import { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

global.__VERSION__ = require('../package.json').version

configure({ adapter: new Adapter() })

/// /////
// JSDOM
const dom = new JSDOM('<html><head></head><body></body></html>')
const win = dom.window
const doc = dom.window.document

// Set our data
win.process = { env: process.env }

// propagateProperties(win, global);

global.shallow = shallow
global.mount = mount
global.render = render
global.document = doc
global.window = win
global.navigator = {
  userAgent: 'node.js'
}

// Skip createElement warnings but fail tests on any other warning
console.error = message => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message)
  }
}

// Some tests failing due to warnings in test environment
// example:
// Warning: This browser doesn't support the `onScroll` event
console.warn = message => {
  throw new Error(message)
}
