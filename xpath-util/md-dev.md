コマンドラインをインストール

CMD

```
$ cd $HOME


$ git clone https://github.com/ukijumotahaneniarukenia/script-chrome-extension.git


$ cd script-chrome-extension/


$ sudo npm install -g @vue/cli @vue/cli-init
```

作業ディレクトリの作成

CMD

```
$ mkdir xpath-util

$ cd xpath-util
```

ボイラーテンプレートの作成

CMD

```
$ vue create --preset kocal/vue-web-extension app
```

OUT

```
Fetching remote preset kocal/vue-web-extension...


Vue CLI v4.5.7
✨  Creating project in /home/aine/script-chrome-extension/xpath-util/app.
⚙️  Installing CLI plugins. This might take a while...


> yorkie@2.0.0 install /home/aine/script-chrome-extension/xpath-util/app/node_modules/yorkie
> node bin/install.js

setting up Git hooks
can't find .git directory, skipping Git hooks installation

> core-js@3.6.5 postinstall /home/aine/script-chrome-extension/xpath-util/app/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"


> ejs@2.7.4 postinstall /home/aine/script-chrome-extension/xpath-util/app/node_modules/ejs
> node ./postinstall.js

added 1289 packages from 926 contributors and audited 1292 packages in 11.521s

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

added 61 packages from 40 contributors and audited 1353 packages in 4.565s

62 packages are looking for funding
  run `npm fund` for details

found 2 vulnerabilities (1 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
⚓  Running completion hooks...
error: 'request' is defined but never used (no-unused-vars) at app/src/background.js:1:49:
> 1 | browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    |                                                 ^
  2 |   console.log('Hello from the background')
  3 | 
  4 |   browser.tabs.executeScript({


error: 'sender' is defined but never used (no-unused-vars) at app/src/background.js:1:58:
> 1 | browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    |                                                          ^
  2 |   console.log('Hello from the background')
  3 | 
  4 |   browser.tabs.executeScript({


error: 'sendResponse' is defined but never used (no-unused-vars) at app/src/background.js:1:66:
> 1 | browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    |                                                                  ^
  2 |   console.log('Hello from the background')
  3 | 
  4 |   browser.tabs.executeScript({


3 errors found.
```

Vuetify化

CMD

```
$ cd app/

$ npm install vuetify --save
```

以下の２ファイルを修正

/home/aine/script-chrome-extension/xpath-util/app/public/browser-extension.html


headタグに以下を追加

```
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
```

修正前

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

修正後

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <title><%= htmlWebpackPlugin.options.title %></title>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

/home/aine/script-chrome-extension/xpath-util/app/src/popup/main.js


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


ビルド


CMD

```
$ npm run build
```

OUT

```

> app@0.1.0 build /home/aine/script-chrome-extension/xpath-util/app
> vue-cli-service build


⠋  Building for production... WARN  No `key.pem` file detected. This is problematic only if you are publishing an existing extension
⠇  Building for production...

 WARNING  Compiled with 3 warnings                                                                                                                                                     7:57:43

 warning  

asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  js/chunk-vendors.6d89820a.js (889 KiB)

 warning  

entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  popup (892 KiB)
      js/chunk-vendors.6d89820a.js
      css/popup.842750f1.css
      js/popup.4bdad999.js


 warning  

webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

  File                                 Size                                                                      Gzipped

  dist/js/chunk-vendors.6d89820a.js    889.26 KiB                                                                198.41 KiB
  dist/js/background.js                34.46 KiB                                                                 11.71 KiB
  dist/js/content-script.js            24.99 KiB                                                                 9.08 KiB
  dist/js/popup.4bdad999.js            2.59 KiB                                                                  1.21 KiB
  dist/css/popup.842750f1.css          0.06 KiB                                                                  0.08 KiB

  Images and other types of assets omitted.

 DONE  Build complete. The dist directory is ready to be deployed.
 INFO  Check out deployment instructions at https://cli.vuejs.org/guide/deployment.html
      

```

開発はdistディレクトリをchrome-extensionにマウントしておしまい

本番はdistディレクトリをzipにしてアップロードしておしまい

CMD
```
$ zip -r xpath-util.zip dist
```

OUT
```
  adding: dist/ (stored 0%)
  adding: dist/icons/ (stored 0%)
  adding: dist/icons/128.png (deflated 0%)
  adding: dist/icons/48.png (deflated 2%)
  adding: dist/icons/16.png (deflated 4%)
  adding: dist/icons/19.png (deflated 4%)
  adding: dist/icons/38.png (deflated 2%)
  adding: dist/css/ (stored 0%)
  adding: dist/css/popup.842750f1.css (deflated 6%)
  adding: dist/popup.html (deflated 57%)
  adding: dist/index.html (deflated 41%)
  adding: dist/js/ (stored 0%)
  adding: dist/js/content-script.js.map (deflated 71%)
  adding: dist/js/chunk-vendors.6d89820a.js (deflated 78%)
  adding: dist/js/background.js (deflated 66%)
  adding: dist/js/chunk-vendors.6d89820a.js.map (deflated 78%)
  adding: dist/js/popup.4bdad999.js.map (deflated 72%)
  adding: dist/js/content-script.js (deflated 64%)
  adding: dist/js/popup.4bdad999.js (deflated 54%)
  adding: dist/js/background.js.map (deflated 73%)
  adding: dist/manifest.json (deflated 50%)
  adding: dist/_locales/ (stored 0%)
  adding: dist/_locales/en/ (stored 0%)
  adding: dist/_locales/en/messages.json (deflated 15%)
  adding: dist/favicon.ico (deflated 80%)
```

２回目以降

```
$ git clone https://github.com/ukijumotahaneniarukenia/script-chrome-extension.git

$ cd my-extension-xpath-util/

$ npm ci

$ npm run build
```

