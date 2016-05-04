const isJSONRequest = (ctx) => ctx.request.header.accept.match(/application\/json/)

module.exports = {
  isJSONRequest
}
