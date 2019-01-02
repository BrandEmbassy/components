import React from 'react'

import { storiesOf } from '@storybook/react'

import Grid from './../src/Basic/Grid/Grid'
import Typography from './../src/Basic/Typography/Typography'
import Icons from './../src/Basic/Icons/Icons'

import InputDemo from './../src/Demos/Forms/InputDemo'
import SelectboxDemo from './../src/Demos/Forms/SelectboxDemo'
import TextareaDemo from './../src/Demos/Forms/TextareaDemo'
import CheckboxDemo from './../src/Demos/Forms/CheckboxDemo'
import RadioDemo from './../src/Demos/Forms/RadioDemo'
import TableDemo from './../src/Demos/Forms/TableDemo'
import SubmitDemo from './../src/Demos/Forms/SubmitDemo'

import ButtonDemo from './../src/Demos/Controls/ButtonDemo'
import ButtonGroupDemo from './../src/Demos/Controls/ButtonGroupDemo'
import LinkDemo from './../src/Demos/Controls/LinkDemo'
import LinklistDemo from './../src/Demos/Controls/LinklistDemo'
import SwitcherDemo from './../src/Demos/Controls/SwitcherDemo'
import ToggleSwitchDemo from './../src/Demos/Controls/ToggleSwitchDemo'

import BreadcrumbsDemo from './../src/Demos/Navigation/BreadcrumbsDemo'

import HeaderDemo from './../src/Demos/Custom/HeaderDemo'
import LabelDemo from './../src/Demos/Custom/LabelDemo'
import ChannelDemo from './../src/Demos/Custom/ChannelDemo'
import NotificationDemo from './../src/Demos/Custom/NotificationDemo'
import ProfilePictureDemo from './../src/Demos/Custom/ProfilePictureDemo'
import StatusesDemo from './../src/Demos/Custom/StatusesDemo'
import TagDemo from './../src/Demos/Custom/TagDemo'

import ExampleA from './../src/Demos/Example/ExampleA'
import ExampleB from './../src/Demos/Example/ExampleB'
import ExampleNewGrid2 from './../src/Demos/Example/ExampleNewGrid2'

import ReleaseNotes from './../src/Demos/ReleaseNotes/ReleaseNotes'

storiesOf('Release Notes', module)
  .add('Release Notes', () => <ReleaseNotes />)

storiesOf('Basic', module)
  .add('Grid', () => <Grid />)
  .add('Typography', () => <Typography />)
  .add('Icons', () => <Icons />)

storiesOf('Forms', module)
  .add('Input', () => <InputDemo />)
  .add('Selectbox', () => <SelectboxDemo />)
  .add('Textarea', () => <TextareaDemo />)
  .add('Checkbox', () => <CheckboxDemo />)
  .add('Radio', () => <RadioDemo />)
  .add('Table', () => <TableDemo />)
  .add('Submit', () => <SubmitDemo />)

storiesOf('Controls', module)
  .add('Button', () => <ButtonDemo />)
  .add('Button group', () => <ButtonGroupDemo />)
  .add('Link', () => <LinkDemo />)
  .add('Linklist', () => <LinklistDemo />)
  .add('Switcher', () => <SwitcherDemo />)
  .add('ToggleSwitch', () => <ToggleSwitchDemo />)

storiesOf('Navigation', module)
  .add('Breadcrumbs', () => <BreadcrumbsDemo />)

storiesOf('Custom', module)
  .add('Header', () => <HeaderDemo />)
  .add('Label', () => <LabelDemo />)
  .add('Chanel', () => <ChannelDemo />)
  .add('Notification Message', () => <NotificationDemo />)
  .add('Profile Picture', () => <ProfilePictureDemo />)
  .add('Statuses', () => <StatusesDemo />)
  .add('Tag', () => <TagDemo />)

storiesOf('Example', module)
  .add('ExampleA', () => <ExampleA />)
  .add('ExampleB', () => <ExampleB />)
  .add('New Grid2', () => <ExampleNewGrid2 />)
