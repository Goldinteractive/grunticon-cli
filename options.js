module.exports = {
  prepend: `\nCreate the all the grunticon css\n\nUsage:`,
  append: `

Simple:

  grunticon path/to/the/icons/ path/to/the/output/folder

Advanced options:

  grunticon path/to/the/icons/ path/to/the/output/folder --config=path/to/the/advanced/grunticon/options

Version ${ require('./package.json').version }
`,
  options: [
    {
      option: 'help',
      alias: 'h',
      type: 'Boolean',
      description: 'Cli usage innformation'
    },
    {
      option: 'version',
      alias: 'v',
      type: 'Boolean',
      description: 'Print the current cli version'
    },
    {
      option: 'config',
      alias: 'c',
      type: 'String',
      description: 'Path to the grunticon advanced options'
    }
  ]
}