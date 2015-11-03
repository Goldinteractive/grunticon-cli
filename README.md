# grunticon-cli
Standalone grunticon command line tool without using Grunt.js

## Installation

### Npm

```bash
$ npm install grunticon-cli -g
```

## Usage

Type `grunticon` in your terminal to see all the available options

### Basic

```bash
$ grunticon path/to/the/icons/ path/to/the/output/folder
```

### Advanced

If you want to use special grunticon options you must use a separate file. For example:

```bash
$ grunticon path/to/the/icons/ path/to/the/output/folder --config=path/to/the/advanced/grunticon/options
```

And then in options.js

```js
module.exports = {
  cssprefix: '.ic-'
}
```

For the list of all the advanced grunticon options please check the [grunticon-lib repo](https://github.com/filamentgroup/grunticon-lib)

