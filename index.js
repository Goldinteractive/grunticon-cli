// Let's use a bit of procedural programming here ;)

// include global shell helpers
require('shelljs/global')

// loda the dependencies
const
  options = require('./options'),
  log = console.log.bind(console),
  path = require('path'),
  chalk =  require('chalk'),
  optionator = require('optionator')(options),
  Grunticon = require( 'grunticon-lib' )

// some global variables
var opts, grunticon, grunticonOptions

// check whether the options can be correctly parsed
try {
  opts = optionator.parse(process.argv, options)
} catch (e) {
  log(chalk.red(e))
  process.exit(1)
}

// load external config files
if (opts.config)
  grunticonOptions = require(path.join(__dirname, opts.config))

// run the tasks
if (opts.version)
  log(require('./package.json').version) // cli version
else if (!opts._.length || opts.help)
  log(optionator.generateHelp()) // help me please!
else {
  // compile
  grunticon = new Grunticon(
    ls(opts._[0])
      .filter((filename) => /.svg$/.test(filename)) // filter all non svg files
      .map((filename) => `${opts._[0]}/${filename}`), // map correctly the files paths
    opts._[1] || '.',
    grunticonOptions || {}
  )
  grunticon.process(() => log(chalk.green('Congrats! You have just compiled your icons')))
}



