# booking

The focus of this repo is to offer as start point for multipurpose web apps based on login & crud operations over resources.

# Overview

 - Contains Firebase configured and working in the messages feature.
For a quick start:

```bash
git clone https://github.com/haicku/starter-app
cd starter-app
npm install
npm run server
```

# Example Usage

## Getting Started

#### Prerequisites

You will need **git** to clone this repository. You can get git from http://git-scm.com/.

We also use a number of node.js tools to initialize and test. You must have node.js and
its package manager (npm) installed.  You can get them from http://nodejs.org/.

#### Clone

To get you started you can simply clone `master` branch from the
[haicku/starter-app][https://github.com/haicku/starter-app] repository and install the dependencies:

Clone the starter-app repository using **git**:

```
git clone https://github.com/haicku/starter-app
cd starter-app
```

If you just want to start a new project without the commit history then you can do:

```bash
git clone --depth=1 https://github.com/haicku/starter-app <your-desired-folder>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

In order to support [Progressive Enhancement][pe], you should create a version that is supported in all browsers, that is the purpose for `branch v0`. To clone this branch, you can use:

```bash
git clone --branch=v0 https://github.com/haicku/starter-app <your-desired-folder>
```


#### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We also get the AngularJS and Angular Material library code via `npm`

```
npm install
```

You should find that you have one new folder in your project.

* `node_modules` - contains the npm packages for the tools we need.

## Design principles

Here are some interesting ideas, that you'll find in the code structure:

  - [Progressive Enhacement][pe]
  - [Semantic Web][semantic], rely on browser for view rendering
  - [*T*est *D*riven *D*evelopment][tdd]
  - As many as I've found coherent, from the [johnpapa/angular-styleguide][angular-sg]
  - Some implementation solutions are extracted from [waitandeat][waitandeat]

[angular-sg]: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md
[pe]: https://en.wikipedia.org/wiki/Progressive_enhancement
[tdd]: https://en.wikipedia.org/wiki/Test-driven_development
[semantic]: https://en.wikipedia.org/wiki/Semantic_Web
[waitandeat]: https://github.com/gordonmzhu/angular-course-demo-app-v2

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
