'use strict'

const layout = require('../../../layouts')

module.exports = () => {
  const title = 'About'
  const body = buildBody()
  return layout({ title, body })
}

const buildBody = () =>
  `<header>
    <h1>What is this?</h1>
  </header>
  <section>
    <p>My partner and I enjoy visiting container malls/markets in our travels and thought this would be a useful tool for mapping and finding more!</p>
  </section>`
