const cleanProps = (params) => {
  if (params === {}) return {}

  return Object.keys(model).reduce((mem, p) => {
    if (params.hasOwnProperty(p)) mem[p] = params[p]
    return mem
  }, {})
}

const isValid = (params) => {
  for (let p of Object.keys(model)) {
    if (!params[p]) return false
  }
  return true
}

const model = {
  name: '',
  slug: '',
  address: '',
  latitude: '',
  longitude: '',
  description: '',
  content: ''
}

module.exports = {
  cleanProps,
  isValid,
  model
}
