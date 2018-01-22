import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import App from './../src/App';
import Componenta from './../src/Global/Componenta/Componenta';


storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('BE', module)
  .add('BE all', () => <App />)
  .add('Componenta', () => <Componenta />);

storiesOf('Live-Chat', module)
  .add('Live-Chat all', () => <div>Window</div> )
  .add('Header', () => <div>Header</div> );