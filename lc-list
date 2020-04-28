#!/usr/bin/env node

const chalk = require('chalk')

/**
 * Padding.
 */

console.log()
process.on('exit', () => {
  console.log()
})

const body = `[]`;

/**
 * List repos.
 */

const requestBody = JSON.parse(body)
if (Array.isArray(requestBody)) {
    console.log(' templates list:')
    console.log()
    requestBody.forEach(repo => {
      console.log(
        '  ' + chalk.green('~') +
        '  ' + chalk.blue(repo.name) +
        ' - ' + repo.description)
    })
}
