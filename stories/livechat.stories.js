import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs/react';

import QuickReply from '../src/node_modules/components/ChatBot/Plugin/Element/QuickReply'
import Button from '../src/node_modules/components/ChatBot/Plugin/Element/Button'
import Heading from '../src/node_modules/components/ChatBot/Plugin/Element/Heading'
import Image from '../src/node_modules/components/ChatBot/Plugin/Element/Image'
import Text from '../src/node_modules/components/ChatBot/Plugin/Element/Text'
import Plugin from '../src/node_modules/components/ChatBot/Plugin'

// id(string, required)
// ++type(string, required) - Type of the element.Available values:
// ++text(string, optional)
// ++postback(string, optional)
// ++url(string, optional)
// ++plugins(array[PluginElement], optional)

// 'TEXT', 'TITLE', 'SUBTITLE', 'IMAGE', 'BUTTON', 'MENU', 'TEXT_AND_BUTTONS', 'QUICK_REPLIES'

const repliesButtons = [
  { id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Button 1', postback: 'click-on-button-1' },
  { id: 'TkGJ6CAiN', type: 'BUTTON', text: 'Button 2', postback: 'click-on-button-2' },
  { id: 'EyCyTRCi4', type: 'BUTTON', text: 'Button 3', postback: 'click-on-button-3' }
]

const replies = [
  {
    id: 'Ukm0hRAiA',
    type: 'QUICK_REPLIES',
    elements: repliesButtons
  }
]

const menuElements = [
  { id: 'Ek4tPy1h4', type: 'MENU', elements: [
    { id: 'Ek4tPy1h4', type: 'IMAGE', url: 'http://via.placeholder.com/350x150', postback: 'click-on-button-3' },
    { id: 'Ek4tPy1h4', type: 'HEADING', text: 'Heading', postback: 'click-on-button-3' },
    { id: 'Ek4tPy1h4', type: 'TEXT', text: 'Lorem Impsum...', postback: 'click-on-button-3' },
    { id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Click me!', postback: 'click-on-button-1' },
    { id: 'NkGJ6CAiN', type: 'BUTTON', text: 'No click me!', postback: 'click-on-button-2' },
    { id: 'EyCyTRCi4', type: 'BUTTON', text: 'Aww don`t click on me', postback: 'click-on-button-3' }
  ]}
]

const galleryElements = [
  { id: 'Ek4tPy1h4', type: 'MENU', elements: menuElements },
  { id: '41eajy134', type: 'MENU', elements: menuElements },
  { id: 'NkO6s1yh4', type: 'MENU', elements: menuElements }
]

storiesOf('Chatbots elements', module)
  .addDecorator(withKnobs)
  .add('Button', () => <Button label={text('label', 'Click me!')} />)
  .add('Heading', () => <Heading content={text('content', 'Lorem Ipsum!')} />)
  .add('Image', () => <Image src={text('src', 'http://via.placeholder.com/350x150')} />)
  .add('Text', () => <Text content={text('content', 'Hello world!')} />)
  .add('QuickReply', () => <QuickReply replies={repliesButtons} onClick={() => {}} />)

storiesOf('Chatbots Plugins', module)
  .addDecorator(withKnobs)
  .add('Menu', () => <Plugin elements={object('elements', menuElements)} onClick={() => { }} />)
  .add('Gallery', () => <Plugin elements={object('elements', galleryElements)} onClick={() => {}} />)
  .add('Text and buttons', () => <Plugin elements={object('elements', menuElements)} onClick={() => {}} />)
  .add('Quick Replies', () => <Plugin elements={object('elements', replies)} onClick={() => {}} />)
