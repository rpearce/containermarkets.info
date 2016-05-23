const allowedProps = ['name', 'slug', 'address', 'lat', 'long', 'description', 'content']

const cleanProps = (params) =>
  allowedProps.reduce((mem, p) => {
    if (params.hasOwnProperty(p)) mem[p] = params[p]
    return mem
  }, {})

module.exports = {
  cleanProps
}
