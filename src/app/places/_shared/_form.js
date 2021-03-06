'use strict'

module.exports = ({
  action,
  csrfToken,
  errors,
  place
}) =>
  `
  <form method="POST" action="${action}" class="form">
    <input type="hidden" name="_csrf" value="${csrfToken}" />
    ${buildErrors(errors)}
    <div class="form__section">
      <label for="place_name">Name</label>
      <input type="text" name="place[name]" id="place_name" value="${place.name}" required />
    </div>
    <div class="form__section">
      <label for="place_slug">Slug</label>
      <input type="text" name="place[slug]" id="place_slug" value="${place.slug}" required />
    </div>
    <div class="form__section">
      <label for="place_address">Address</label>
      <input type="text" name="place[address]" id="place_address" value="${place.address}" required />
    </div>
    <div class="form__section">
      <label for="place_lat">Latitude</label>
      <input type="text" name="place[latitude]" id="place_latitude" value="${place.latitude}" required />
    </div>
    <div class="form__section">
      <label for="place_long">Longitude</label>
      <input type="text" name="place[longitude]" id="place_longitude" value="${place.longitude}" required />
    </div>
    <div class="form__section">
      <label for="place_description">Description</label>
      <input type="text" name="place[description]" id="place_description" value="${place.description}" required />
    </div>
    <div class="form__section">
      <label for="place_content">Content</label>
      <textarea name="place[content]" id="place_content" placeholder="Enter markdown content here..." rows="1" class="mdEditor" data-js="textarea" data-markdown required>${place.content}</textarea>
    </div>
    <div class="form__section">
      <button type="submit">Submit</button>
      <a href="/${place.slug}" class="form__cancel">Cancel</a>
    </div>
  </form>
  `

const buildErrors = (errors) => {
  if (!errors || errors.length === 0) return ''
  return errors.map(e => `<div class="form__errors">${e}</div>`)
}
