const isJSONRequest = (ctx) => {
  return ctx.request.header.accept && ctx.request.header.accept.match(/application\/json/)
}

module.exports = {
  isJSONRequest
}
