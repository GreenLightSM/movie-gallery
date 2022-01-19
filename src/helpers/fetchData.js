const json = require('../assets/db/imdb.json')

export const fetchData = (offset = 0) => {
  const result = []

  const calculatedLimit =
    json.length - offset >= 20 ? offset + 20 : offset + (json.length - offset)

  for (let i = offset; i < calculatedLimit; i++) {
    result.push(json[i])
  }

  return result
}
