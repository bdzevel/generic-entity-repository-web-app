# Generic Entity Repository Web Application

Generic Entity Repository front-end web app server

## Stack

* [Node.js](https://nodejs.org) as a web server to serve the front end
* [React](https://facebook.github.io/react/) as the front end framework
* [SASS](http://sass-lang.com/) as the CSS preprocessor
   * Use SCSS syntax
* [Webpack](https://webpack.github.io/) for building, bundling, and minifying JS/CSS code
* [Grunt](https://gruntjs.com/) as a task runner, for automation and helpful scripts
    * (I may switch to [Gulp](http://gulpjs.com/) for this at some point)
* [Babel](https://babeljs.io/) to transpile to ES5
* [ESLint](http://eslint.org/) for JS linting (enforced on pre-commit hook)
    * [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) used as a base and lightly modified
* [Stylelint](https://stylelint.io/) for CSS linting (enforced on pre-commit hook)

## Development

### IDE/Environment

I use [Visual Studio Code](https://code.visualstudio.com/) with the following extensions:

* ESLint (Dirk Baeumer)
* npm Intellisense (Christian Kohler)
* Search node_modules (Jason Nutter)
* stylelint (Shinnosuke Watanabe)

### Dependencies

Node.js and NPM.
Dependencies are mainly managed by npm.
You can choose to install the `grunt` command globally for yourself:
```
npm install -g grunt-cli
```

### Workflow

1. Setup
    1. Install dependencies
    ```
    npm install
    ```
    2. Copy `.dev.example.env` to `.env`

2. Code
    1. Front end files located under `app/`
    2. JS/JSX files located under `app/js`
    3. SCSS files located under `app/css`
    4. `public/` contains build/bundled/minified files and `index.html` which is the main layout in pure HTML
    5. Node.js-based web server located under `server/`

3. Lint

   Note that linting is enforced on a pre-commit hook using [husky](https://github.com/typicode/husky) but it's good to know that you're square before trying to commit

4. Build
```
npm run build
```

5. Run
```
npm start
```

   By default this will start on port 3002 so you can access the app in a browser by navigating to localhost:3002
