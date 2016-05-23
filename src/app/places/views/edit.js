'use strict'

const layout = require('../../_layouts')

module.exports = (place) => {
  const title = `${place.name} – Edit`
  const body = buildBody({ title, place })
  return layout({ title, body })
}

const buildBody = ({ title, place }) =>
  `<header class="hero section">
    <div class="l--constrained">
      <h1>${title}</h1>
    </div>
  </header>
  <section class="section">
    <div class="l--constrained">
      <form method="PATCH" url="/${place.slug}" class="form">
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
          <input type="text" name="place[lat]" id="place_lat" value="${place.lat}" required />
        </div>
        <div class="form__section">
          <label for="place_long">Longitude</label>
          <input type="text" name="place[long]" id="place_long" value="${place.long}" required />
        </div>
        <div class="form__section">
          <label for="place_description">Description</label>
          <input type="text" name="place[description]" id="place_description" value="${place.description}" required />
        </div>
        <div class="form__section">
          <label for="place_content">Content</label>
          <textarea name="place[content]" id="place_content" placeholder="Enter markdown content here..." rows="1" data-js="textarea" required>${place.content}</textarea>
        </div>
        <div class="form__section">
          <button type="submit">Update Place</button>
          <a href="/${place.slug}">Cancel</a>
        </div>
      </form>
    </div<
  </section>`
