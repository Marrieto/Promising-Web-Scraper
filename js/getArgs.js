let getArgs = function () {
  let returnArray = []
  for (let i = 2; i < process.argv.length; i++) {
    returnArray.push(process.argv[i])
  }
  return returnArray
}

module.exports = {getArgs}
