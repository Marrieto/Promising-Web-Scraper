const requestURL = require('request')

let fetch = function (url) {
  return new Promise((resolve, reject) => {
    requestURL.get(url, (error, response, body) => {
      console.log(`Requested url: ${url}`)
      if (error) {
        reject(error)
      }
      // if (response !== 200) {
      //   reject('Bad response')
      // }
      resolve('All good')
    })
  })
}

// let fetch = function (url) {
//   return new Promise((resolve, reject) => {
//     request.get(url, (error, response, html) => {
//       if (error || response !== 200) {
//         return reject(`${error} + ${response}`)
//       }
//       return resolve(html)
//     })
//   })
// }

module.exports.fetch = fetch
