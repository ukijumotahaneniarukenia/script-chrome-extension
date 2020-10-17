PRE

```
$ cd $HOME


$ git clone https://github.com/ukijumotahaneniarukenia/script-chrome-extension.git


$ cd script-chrome-extension/


$ sudo npm install -g @vue/cli @vue/cli-init
```


CMD

```
$ vue create --preset kocal/vue-web-extension my-extension-xpath-util
```

OUT

```
Fetching remote preset kocal/vue-web-extension...


Vue CLI v4.5.7
✨  Creating project in /home/aine/script-chrome-extension/my-extension-xpath-util.
⚙️  Installing CLI plugins. This might take a while...


> yorkie@2.0.0 install /home/aine/script-chrome-extension/my-extension-xpath-util/node_modules/yorkie
> node bin/install.js

setting up Git hooks
can't find .git directory, skipping Git hooks installation

> core-js@3.6.5 postinstall /home/aine/script-chrome-extension/my-extension-xpath-util/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> ejs@2.7.4 postinstall /home/aine/script-chrome-extension/my-extension-xpath-util/node_modules/ejs
> node ./postinstall.js

added 1289 packages from 926 contributors and audited 1292 packages in 13.215s

57 packages are looking for funding
  run `npm fund` for details

found 2 vulnerabilities (1 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
🚀  Invoking generators...

@vue/cli-plugin-eslint
? Pick an ESLint config: Basic
? Pick additional lint features: 

vue-cli-plugin-browser-extension
? Which browser extension components do you wish to generate? background, popup, content scripts
? Generate a new signing key (danger)? No

Preset options:
? Install axios? Yes
📦  Installing additional dependencies...

added 61 packages from 40 contributors and audited 1353 packages in 4.17s

62 packages are looking for funding
  run `npm fund` for details

found 2 vulnerabilities (1 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
⚓  Running completion hooks...
error: 'request' is defined but never used (no-unused-vars) at my-extension-xpath-util/src/background.js:1:49:
> 1 | browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    |                                                 ^
  2 |   console.log('Hello from the background')
  3 | 
  4 |   browser.tabs.executeScript({


error: 'sender' is defined but never used (no-unused-vars) at my-extension-xpath-util/src/background.js:1:58:
> 1 | browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    |                                                          ^
  2 |   console.log('Hello from the background')
  3 | 
  4 |   browser.tabs.executeScript({


error: 'sendResponse' is defined but never used (no-unused-vars) at my-extension-xpath-util/src/background.js:1:66:
> 1 | browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    |                                                                  ^
  2 |   console.log('Hello from the background')
  3 | 
  4 |   browser.tabs.executeScript({


3 errors found.
```


CMD

```
$ cd my-extension-xpath-util/
```

CMD

```
$ npm run build
```

OUT

```
> my-extension-xpath-util@0.1.0 build /home/aine/script-chrome-extension/my-extension-xpath-util
> vue-cli-service build


⠋  Building for production... WARN  No `key.pem` file detected. This is problematic only if you are publishing an existing extension
⠸  Building for production...

 DONE  Compiled successfully in 2445ms                                                                                                                                                 7:26:02

  File                                 Size                                                                      Gzipped

  dist/js/chunk-vendors.1046d9ad.js    98.52 KiB                                                                 34.54 KiB
  dist/js/background.js                34.46 KiB                                                                 11.71 KiB
  dist/js/content-script.js            24.99 KiB                                                                 9.08 KiB
  dist/js/popup.765994d2.js            2.53 KiB                                                                  1.18 KiB
  dist/css/popup.842750f1.css          0.06 KiB                                                                  0.08 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
      

```

CMD

```
$ npm install vuetify --save
```


以下の２ファイルを修正

browser-extension.html

headタグに以下を追加
```
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
```


main.jsに以下のように修正

修正前
```
import Vue from 'vue'
import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
```

修正後
```
import Vue from 'vue'
import App from './App.vue'

import Vuetify from "vuetify";

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  render: h => h(App)
})
```

CMD

```
$ npm run build
```

OUT

distディレクトリをchrome-extensionにマウントしておしまい
```

```
