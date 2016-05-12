const isJSONRequest = (request) => {
  return request.header.accept && request.header.accept.match(/application\/json/)
}

module.exports = {
  isJSONRequest
}
