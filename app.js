'use strict'
const getArgs = require('./js/getArgs')
const getPage = require('./js/getPage')

// let args = getArgs.getArgs()
let args = 'http://www.dn.se/'
console.log(args)

let temp = getPage.fetch(args).then((response) => {
  console.log(response.data)
}).catch((err) => {
  console.log(`Error: ${err}`)
})
