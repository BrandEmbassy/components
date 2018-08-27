# UI components library of Brand Embassy

## Getting Started - Adding components to your project

### React App

#### your project needs to have redux and video-react dependencies installed
* `yarn add redux video-react`

#### add module to your project
* `yarn add https://github.com/BrandEmbassy/components.git`

#### import global to app
* `import { Global } from 'components';`

#### import chosen component from storybook
* `https://brand-embassy-components-prod.s3.amazonaws.com/1.0/storybook/index.html`

### PHP Server-side-rendering App
`composer install brandembassy/components`

See: `src-php/Forms/Table/Ui/TableTest.php` for how to use Table Component.

## Developing components

### `yarn install`
* Run in console in the root of the repository to install all dependencies

### `yarn run lib`
* create new library for push

## Build & run library

### `yarn run library`
* Run in console in the root of the repository to build all dependencies and launch UI library
* Library will open automatically on http://localhost:6006
* CSS & other necessary files will be prepared in `/build/static` folder

## Development

### `yarn run storybook`
* Run in console in the root of the repository to start storybook in development mode
* Storybook can be found (http://localhost:6006)

