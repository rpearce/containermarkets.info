'use strict'

module.exports = ({
  action,
  csrfToken,
  errors
}) =>
  `
  <form method="POST" action="${action}" class="form">
    <input type="hidden" name="_csrf" value="${csrfToken}" />
    ${buildErrors(errors)}
    <div class="form__section">
      <label for="admin_email">Email</label>
      <input type="text" name="admin[email]" id="admin_email" value="" required />
    </div>
    <div class="form__section">
      <button type="submit">Submit</button>
      <a href="/" class="form__cancel">Cancel</a>
    </div>
  </form>
  `

const buildErrors = (errors) => {
  if (!errors || errors.length === 0) return ''
  return errors.map(e => `<div class="form__errors">${e}</div>`)
}
