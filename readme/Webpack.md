##Reference
- main: https://webpack.github.io

## Installation
#pre
# npm
- karma, tsd, tslint

```
  npm init
  npm install tsd tslint --save-dev
  npm install angular angular-route bootstrap --save-dev
  npm install 
  - style-loader css-loader sass-loader 
  - babel-loader ts-loader 
  - raw-loader file-loader 
  --save-dev
```

- config

```
  tsd init
  tsd install angular --save-dev
   
```

## Project structure

```
  .gitignore
  .karma.conf.js
  .README.md
  .tsconfig.json
  tsd.json
  tslint.json
  webpack.config.js
  - src
    index.d.ts
    - AppModule
      AppModule.ts                // load all modules
      AppModule.html
    - SampleModule
      SampleModule.ts
      - PageDirective
        PageController.ts
        PageDirective.ts
        PageTemplate.html
  - typings
```

## Files
- package.json

```json
{
  "name": "webpack",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --port 3000" // netstat -na | grep 8080 
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jshint": "^2.9.1",
    "jshint-loader": "^0.8.3",
    "node-libs-browser": "^0.5.3",
    "strip-loader": "^0.1.1",
    "ts-loader": "^0.7.2",
    "tslint": "^3.2.2",
    "tslint-loader": "^2.1.0",
    "webpack": "^1.12.11"
  }
}
```


