import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs/react';

import QuickReplies from '../src/node_modules/components/ChatBot/Plugin/Element/QuickReplies'
import Button from '../src/node_modules/components/ChatBot/Plugin/Element/Button'
import Heading from '../src/node_modules/components/ChatBot/Plugin/Element/Heading'
import Image from '../src/node_modules/components/ChatBot/Plugin/Element/Image'
import Text from '../src/node_modules/components/ChatBot/Plugin/Element/Text'
import Plugin from '../src/node_modules/components/ChatBot/Plugin'

const repliesButtons = [
  { id: 'Nkm0hRAiE', type: 'TEXT', text: 'Button 1', postback: 'click-on-button-1' },
  { id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Button 1', postback: 'click-on-button-1' },
  { id: 'TkGJ6CAiN', type: 'BUTTON', text: 'Button 2', postback: 'click-on-button-2' },
  { id: 'EyCyTRCi4', type: 'BUTTON', text: 'Button 3', postback: 'click-on-button-3' }
]

const quickReplies = [
  {
    id: 'Ukm0hRAiA',
    type: 'QUICK_REPLIES',
    elements: repliesButtons
  }
]

const menuElement = {
  id: 'Ek4tPy1h4',
  type: 'MENU',
  elements: [
    { id: 'Ek4tPy1h2', type: 'IMAGE', url: 'https://picsum.photos/300/150' },
    { id: 'Ek4tPy1h3', type: 'TITLE', text: 'Hello!' },
    { id: 'Ek4tPy1h1', type: 'TEXT', text: 'Lorem Impsum...' },
    { id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Click me!', postback: 'click-on-button-1' },
    { id: 'NkGJ6CAiN', type: 'BUTTON', text: 'No click me!', postback: 'click-on-button-2' },
    { id: 'EyCyTRCi4', type: 'BUTTON', text: 'Aww don`t click on me', postback: 'click-on-button-3' }
  ]
}

const textAndButtons = {
  id: 'Ek4tPy1h4',
  type: 'TEXT_AND_BUTTONS',
  elements: [
    { id: 'Ek4tPy1h3', type: 'TITLE', text: 'Hello!' },
    { id: 'Ek4tPy1h3', type: 'SUBTITLE', text: 'Hello again!' },
    { id: 'Ek4tPy1h1', type: 'TEXT', text: 'Lorem Impsum...' },
    { id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Click me!', postback: 'click-on-button-1' },
    { id: 'NkGJ6CAiN', type: 'BUTTON', text: 'No click me!', postback: 'click-on-button-2' },
    { id: 'EyCyTRCi4', type: 'BUTTON', text: 'Aww don`t click on me', postback: 'click-on-button-3' }
  ]
}

const galleryElements = [
  menuElement,
  menuElement,
  menuElement,
]

const clickHandler = (postback, label) => console.log(postback, label)

storiesOf('Chatbots elements', module)
  .addDecorator(withKnobs)
  .add('Button', () => <Button label={text('label', 'Click me!')} />)
  .add('Heading', () => <Heading content={text('content', 'Lorem Ipsum!')} />)
  .add('Image', () => <Image src={text('src', 'http://via.placeholder.com/350x150')} />)
  .add('Text', () => <Text content={text('content', 'Hello world!')} />)
  .add('QuickReplies', () => <QuickReplies elements={object('elements', repliesButtons)} onClick={clickHandler} />)

storiesOf('Chatbots Plugins', module)
  .addDecorator(withKnobs)
  .add('Menu', () => <Plugin elements={object('elements', [menuElement])} onClick={clickHandler} />)
  .add('Gallery', () => <Plugin elements={object('elements', galleryElements)} onClick={clickHandler} />)
  .add('Text and buttons', () => <Plugin elements={object('elements', [textAndButtons])} onClick={clickHandler} />)
  .add('Quick Replies', () => <Plugin elements={object('elements', quickReplies)} onClick={clickHandler} />)
