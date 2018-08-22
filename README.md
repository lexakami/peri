## Overview

Create a project skeleton for a SilverStripe 4 Platform project. Sets up an empty theme and nightwatch for testing.

## Installation

```
# Checkout the repo
git clone git@github.com:silverstripeltd/project-skeleton.git <yourproject> -o skeleton

# Change directory to your project
cd <yourproject>

# replace the remote origin with your own
git remote remove skeleton
git remote add origin git://git@whatever.com/your/project.git

# Run composer
composer install

# install yarn dependencies
yarn

# compile your CSS. This is empty initially
yarn dev

# create a .env file from the template
cp .env.example .env

# run a dev/build
vendor/bin/sake dev/build flush=1

# push to master
git push origin master
```

## Environment

Project teams should run their website consistently,
in order to help each other and avoid confusion by differences in configuration.
SilverStripe Ltd. prefers [Vagrant](https://www.vagrantup.com/).
Read the ["Vagrant" Confluence page](https://silverstripe.atlassian.net/wiki/spaces/DEV/pages/401506576/Vagrant)
for setup and usage details.

## Build Tools

* `yarn` install dependencies
* `yarn dev` builds dev js and scss
* `yarn watch` same as `yarn dev` but watches for changes
* `yarn production` minifies production files
* `yarn prod` alias for `yarn production`
* `yarn lint` lints your code
* `yarn hot` **unsupported** hot module reloading


## Acceptance Tests

Nightwatch with cucumber is setup and ready to go. To run the tests you can run `yarn nightwatch`.

If you need to run against a custom host name (localhost is default), you can add a custom file named `.nightwatch.custom.json` with the following content:

```
{
  "test_settings": {
    "default": {
      "launch_url": "http://mycustomdomain"
    }
  }
}
```

## Vue Setup

### Install dependencies
```
yarn add vue 
yarn add --dev vue-eslint-parser eslint-plugin-vue
```

### Update .eslintrc
```
  "extends": [
    "airbnb-base",
    "plugin:vue/essential"
  ],
```

### Update themes/mysite/src/js/app.js
```js
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('app');

  if (el === undefined || el === null) {
    return;
  }

  new Vue({ // eslint-disable-line no-new
    el: '#app',
    components: { },
    data: { },
  });
});

```

### Wrap page content
```html
<div id="app">
    Page html goes here
</div>
```
Note: vue replaces the HTML element targeted (ie. #app) so don't apply this to the body tag.
