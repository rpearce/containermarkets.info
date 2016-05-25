'use strict'

const layout = require('../../_layouts')

module.exports = (places) => {
  const title = 'Container Markets Information'
  const body = buildBody(places)
  return layout({ title, body })
}

const buildBody = (places) =>
  `<header class="hero section">
    <div class="l--constrained">
      <h1>Container Markets Information</h1>
      <h2>Your guide to container markets around the world</h2>
    </div>
  </header>
  <section class="section">
    <div class="l--constrained">
      <h3>What are container markets?</h3>
      <p>Container markets, also known as container malls, are indoor/outdoor markets made predominantly from repurposed shipping containers. They typically house food and drink vendors, artisanal craftspeople, independent retailers and even name brands.</p>
      <p>There are a number of container markets found all over the globe, and we will be listing, mapping and discovering them here.</p>
    </div>
  </section>
  <section class="places section">
    <div class="l--constrained">
      <h3>Container Markets</h3>
      ${buildPlaces(places)}
    </div>
  </section>
  <section class="signup section">
    <div class="l--constrained">
      <h3>Get info on new container markets</h3>
      <p>Note: we will <em>never</em> give out your email nor spam you. We just want people to enjoy container markets as much as we do.</p>
      <!-- Begin MailChimp Signup Form -->
      <form action="//containermarkets.us13.list-manage.com/subscribe/post?u=2df44e8960266388bff165fa6&amp;id=cb3f0eab65" method="post" name="mc-embedded-subscribe-form" target="_blank" novalidate>
        <div>
          <label for="mce-EMAIL">Email Address</label>
          <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="you@greatemail.com">
        </div>
        <div id="mce-responses" class="clear">
          <div class="response" id="mce-error-response" style="display:none"></div>
          <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2df44e8960266388bff165fa6_cb3f0eab65" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe"></div>
      </form>
    </div>
    <!--End mc_embed_signup-->
  </section>`

const buildPlaces = (places) => {
  if (places.length > 0) {
    return `<ul class="places__list">${places.map(buildPlace).join('')}</ul>`
  }
  return '';
}

const buildPlace = (place) => {
  return `<li>
    <a href="/${place.slug}">${place.name}</a>
  </li>`
}
