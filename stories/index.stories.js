import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Grid from './../src/Basic/Grid/Grid';
import Typography from './../src/Basic/Typography/Typography';
import Icons from './../src/Basic/Icons/Icons';

import InputComponent from './../src/Demos/InputComponent';
import SelectboxComponent from './../src/Demos/SelectboxComponent';
import TextareaComponent from './../src/Demos/TextareaComponent';
import CheckboxComponent from './../src/Demos/CheckboxComponent';
import RadioComponent from './../src/Demos/RadioComponent';
import TableComponent from './../src/Demos/TableComponent';
import SubmitComponent from './../src/Demos/SubmitComponent';

import ButtonComponent from './../src/Demos/ButtonComponent';
import ButtonGroupComponent from './../src/Demos/ButtonGroupComponent';
import LinkComponent from './../src/Demos/LinkComponent';

import BreadcrumbsComponent from './../src/Demos/BreadcrumbsComponent';

import Header from './../src/Custom/Header/Header';
import ChannelLabelComponent from './../src/Demos/Custom/ChannelLabelComponent';
import ChannelPictureComponent from './../src/Demos/Custom/ChannelPictureComponent';
import NotificationComponent from './../src/Demos/Custom/NotificationComponent';
import ProfilePictureComponent from './../src/Demos/Custom/ProfilePictureComponent';
import StatusesComponent from './../src/Demos/Custom/StatusesComponent';
import TagComponent from './../src/Demos/Custom/TagComponent';

import ExampleA from './../src/Demos/Example/ExampleA';
import ExampleB from './../src/Demos/Example/ExampleB';

storiesOf('Basic', module)
  .add('Grid', () => <Grid /> )
  .add('Typography', () => <Typography /> )
  .add('Icons', () => <Icons /> );

storiesOf('Forms', module)
  .add('Input', () => <InputComponent/> )
  .add('Selectbox', () => <SelectboxComponent/> )
  .add('Textarea', () => <TextareaComponent/> )
  .add('Checkbox', () => <CheckboxComponent/> )
  .add('Radio', () => <RadioComponent/> )
  .add('Table', () => <TableComponent/> )
  .add('Submit', () => <SubmitComponent/> );

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
  .add('Notification Message', () => <NotificationComponent /> )
  .add('Profile Picture', () => <ProfilePictureComponent /> )
  .add('Statuses', () => <StatusesComponent /> )
  .add('Tag', () => <TagComponent /> );

  storiesOf('Example', module)
  .add('ExampleA', () => <ExampleA /> )
  .add('testuju', () => <ExampleB /> );
