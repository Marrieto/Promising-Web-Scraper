const requestURL = require('axios')

let fetch = async function (url) {
  let temp = await requestURL(url)
  // temp = await temp.json()
  // temp = await JSON.parse(temp)
  // console.log(`${temp}`)
  // console.log(temp.url)
  return temp
}

module.exports.fetch = fetch
