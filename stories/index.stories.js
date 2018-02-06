import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Grid from './../src/Basic/Grid/Grid';
import Typography from './../src/Basic/Typography/Typography';

import InputComponent from './../src/Demos/InputComponent';
import TextareaComponent from './../src/Demos/TextareaComponent';
import CheckboxComponent from './../src/Demos/CheckboxComponent';
import RadioComponent from './../src/Demos/RadioComponent';
import TableComponent from './../src/Demos/TableComponent';

import ButtonComponent from './../src/Demos/ButtonComponent';
import ButtonGroupComponent from './../src/Demos/ButtonGroupComponent';
import LinkComponent from './../src/Demos/LinkComponent';

import BreadcrumbsComponent from './../src/Demos/BreadcrumbsComponent';

import Header from './../src/Custom/Header/Header';
import ChannelLabelComponent from './../src/Demos/Custom/ChannelLabelComponent';
import ChannelPictureComponent from './../src/Demos/Custom/ChannelPictureComponent';
import NotificationMessageComponent from './../src/Demos/Custom/NotificationMessageComponent';
import ProfilePictureComponent from './../src/Demos/Custom/ProfilePictureComponent';
import StatusesComponent from './../src/Demos/Custom/StatusesComponent';

import ExampleA from './../src/Demos/Example/ExampleA';

storiesOf('Basic', module)
  .add('Grid', () => <Grid /> )
  .add('Typography', () => <Typography /> );

storiesOf('Forms', module)
  .add('Input', () => <InputComponent/> )
  .add('Textarea', () => <TextareaComponent/> )
  .add('Checkbox', () => <CheckboxComponent/> )
  .add('Radio', () => <RadioComponent/> )
  .add('Table', () => <TableComponent/> );

storiesOf('Controls', module)
  .add('Button', () => <ButtonComponent /> )
  .add('Button group', () => <ButtonGroupComponent /> )
  .add('Link', () => <LinkComponent /> );

storiesOf('Navigation', module)
  .add('Breadcrumbs', () => <BreadcrumbsComponent/> );

storiesOf('Custom', module)
  .add('Header', () => <Header /> )
  .add('Chanel Label', () => <ChannelLabelComponent /> )
  .add('Chanel Picture', () => <ChannelPictureComponent /> )
  .add('Notification Message', () => <NotificationMessageComponent /> )
  .add('Profile Picture', () => <ProfilePictureComponent /> )
  .add('Statuses', () => <StatusesComponent /> )

  storiesOf('Example', module)
  .add('Example1', () => <ExampleA /> );