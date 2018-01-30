import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Grid from './../src/Basic/Grid/Grid';
import Headings from './../src/Basic/Headings/Headings';
import Paragraphs from './../src/Basic/Paragraphs/Paragraphs';

import Input from './../src/Forms/Input/Input';
import Textarea from './../src/Forms/Textarea/Textarea';
import Checkbox from './../src/Forms/Checkbox/Checkbox';
import Radio from './../src/Forms/Radio/Radio';
import TableComponent from './../src/Forms/Table/TableComponent';

import ButtonComponent from './../src/Demos/ButtonComponent';
import ButtonGroupComponent from './../src/Demos/ButtonGroupComponent';
import SwitcherComponent from './../src/Demos/SwitcherComponent';

storiesOf('Basic', module)
  .add('Grid', () => <Grid /> )
  .add('Headings', () => <Headings /> )
  .add('Paragraphs', () => <Paragraphs /> );

storiesOf('Forms', module)
  .add('Input', () => <Input/> )
  .add('Textarea', () => <Textarea/> )
  .add('Checkbox', () => <Checkbox/> )
  .add('Radio', () => <Radio/> )
  .add('Table', () => <TableComponent/> );

storiesOf('Controls', module)
  .add('Button', () => <ButtonComponent /> )
  .add('Button group', () => <ButtonGroupComponent /> )
  .add('Switcher', () => <SwitcherComponent /> );

storiesOf('Navigation', module)
  .add('Dropdown menu', () => <div>Dropdown menu</div> )
  .add('Breadcrumbs', () => <div>Breadcrumbs</div> );

storiesOf('Custom', module)
  .add('Chanel picture', () => <div>Chanel picture</div> )
  .add('Profile picture', () => <div>Profile picture</div> )
  .add('Chanel label', () => <div>Chanel label</div> )
  .add('Statuses', () => <div>Statuses</div> )
  .add('Tags', () => <div>Tags</div> );