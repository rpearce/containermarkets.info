const allowedProps = ['name', 'slug', 'address', 'lat', 'long', 'description', 'content']

const cleanProps = (params) => {
  if (params === {}) return {}

  return allowedProps.reduce((mem, p) => {
    if (params.hasOwnProperty(p)) mem[p] = params[p]
    return mem
  }, {})
}

const isValid = (params) => {
  for (let p of allowedProps) {
    if (!params[p]) return false
  }
  return true
}

const model = {
  name: '',
  slug: '',
  address: '',
  lat: '',
  long: '',
  description: '',
  content: ''
}

module.exports = {
  cleanProps,
  isValid,
  model
}
