import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Grid from './../src/Basic/Grid/Grid';
import HeadingsComponent from './../src/Demos/HeadingsComponent';
import Typography from './../src/Basic/Typography/Typography';

import InputComponent from './../src/Demos/InputComponent';
import TextareaComponent from './../src/Demos/TextareaComponent';
import CheckboxComponent from './../src/Demos/CheckboxComponent';
import RadioComponent from './../src/Demos/RadioComponent';
import TableComponent from './../src/Demos/TableComponent';

import ButtonComponent from './../src/Demos/ButtonComponent';
import ButtonGroupComponent from './../src/Demos/ButtonGroupComponent';
import SwitcherComponent from './../src/Demos/SwitcherComponent';

import DropdownComponent from './../src/Demos/Navigation/DropdownComponent';
import BreadcrumbsComponent from './../src/Demos/Navigation/BreadcrumbsComponent';

import ChanelLabelComponent from './../src/Demos/Custom/ChanelLabelComponent';
import ChanelPictureComponent from './../src/Demos/Custom/ChanelPictureComponent';
import NotificationMessageComponent from './../src/Demos/Custom/NotificationMessageComponent';
import ProfilePictureComponent from './../src/Demos/Custom/ProfilePictureComponent';
import StatusesComponent from './../src/Demos/Custom/StatusesComponent';
import TagsComponent from './../src/Demos/Custom/TagsComponent';


storiesOf('Basic', module)
  .add('Grid', () => <Grid /> )
  .add('Headings', () => <HeadingsComponent /> )
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
  .add('Switcher', () => <SwitcherComponent /> );

storiesOf('Navigation', module)
  .add('Dropdown menu', () => <DropdownComponent/> )
  .add('Breadcrumbs', () => <BreadcrumbsComponent/> );

storiesOf('Custom', module)
  .add('Chanel Label', () => <ChanelLabelComponent /> )
  .add('Chanel Picture', () => <ChanelPictureComponent /> )
  .add('Notification Message', () => <NotificationMessageComponent /> )
  .add('Profile Picture', () => <ProfilePictureComponent /> )
  .add('Statuses', () => <StatusesComponent /> )
  .add('Tags', () => <TagsComponent /> );