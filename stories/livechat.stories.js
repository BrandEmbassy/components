import React from 'react'
import { storiesOf } from '@storybook/react'

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

const replies = [
  {
    id: 'Ukm0hRAiA',
    type: 'QUICK_REPLIES',
    elements: [
      { id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Button 1', postback: 'click-on-button-1' },
      { id: 'TkGJ6CAiN', type: 'BUTTON', text: 'Button 2', postback: 'click-on-button-2' },
      { id: 'EyCyTRCi4', type: 'BUTTON', text: 'Button 3', postback: 'click-on-button-3' }
    ]
  }
]

const elements = [
  { id: 'Ek4tPy1h4', type: 'IMAGE', url: 'http://via.placeholder.com/350x150', postback: 'click-on-button-3' },
  { id: 'Ek4tPy1h4', type: 'HEADING', text: 'Heading', postback: 'click-on-button-3' },
  { id: 'Ek4tPy1h4', type: 'TEXT', text: 'Lorem Impsum...', postback: 'click-on-button-3' },
  { id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Click me!', postback: 'click-on-button-1' },
  { id: 'NkGJ6CAiN', type: 'BUTTON', text: 'No click me!', postback: 'click-on-button-2' },
  { id: 'EyCyTRCi4', type: 'BUTTON', text: 'Aww don`t click on me', postback: 'click-on-button-3' }
]

const gallery = [
  { id: 'Ek4tPy1h4', type: 'MENU', elements: elements },
  { id: '41eajy134', type: 'MENU', elements: elements },
  { id: 'NkO6s1yh4', type: 'MENU', elements: elements }
]

storiesOf('Chatbots elements', module)
  .add('Button', () => <Button label='Click me!' />)
  .add('Heading', () => <Heading content='Lorem Ipsum!' />)
  .add('Image', () => <Image src='http://via.placeholder.com/350x150' />)
  .add('Text', () => <Text content='Hello world!' />)
  .add('QuickReply', () => <QuickReply replies={replies} onClick={() => {}} />)

storiesOf('Chatbots Plugins', module)
  .add('Menu', () => <Plugin elements={elements} onClick={() => { }} />)
  .add('Gallery', () => <Plugin elements={gallery} onClick={() => {}} />)
  .add('Text and buttons', () => <Plugin elements={elements} onClick={() => {}} />)
  .add('Quick Replies', () => <Plugin elements={replies} onClick={() => {}} />)
