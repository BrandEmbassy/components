import React from 'react'
import { storiesOf } from '@storybook/react'

import { QuickReply } from '../src/node_modules/components/ChatBot/PluginElements/QuickReply'
import { Button } from '../src/node_modules/components/ChatBot/PluginElements/Button'
import { Heading } from '../src/node_modules/components/ChatBot/PluginElements/Heading'
import { Image } from '../src/node_modules/components/ChatBot/PluginElements/Image'
import { Text } from '../src/node_modules/components/ChatBot/PluginElements/Text'

// id(string, required)
// ++type(string, required) - Type of the element.Available values:
// ++text(string, optional)
// ++postback(string, optional)
// ++url(string, optional)
// ++plugins(array[PluginElement], optional)

// 'BUTTON', 'TEXT', 'HEADER', 'IMAGE', 'MENU', 'GALLERY', 'QUICK_REPLIES'

const replies = [
  {id: 'Nkm0hRAiE', type: 'BUTTON', text: 'Button 1', postback: 'click-on-button-1'},
  {id: 'NkGJ6CAiN', type: 'BUTTON', text: 'Button 2', postback: 'click-on-button-2'},
  {id: 'EyCyTRCi4', type: 'BUTTON', text: 'Button 3', postback: 'click-on-button-3'}
]

storiesOf('Chatbots Plugins', module)
  .add('QuickReply', () => <QuickReply replies={replies} onClick={() => {}} />)
  .add('Button', () => <Button label='Click me!' />)
  .add('Heading', () => <Heading content='Lorem Ipsum!' />)
  .add('Image', () => <Image src='http://via.placeholder.com/350x150' />)
  .add('Text', () => <Text content='Hello world!' />)
