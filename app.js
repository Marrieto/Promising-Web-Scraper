'use strict'
const getArgs = require('./js/getArgs')
const nodeFetch = require('node-fetch')
// const getPage = require('./js/getPage')

let args = getArgs.getArgs()
console.log(args)

nodeFetch(args[0]).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
})
