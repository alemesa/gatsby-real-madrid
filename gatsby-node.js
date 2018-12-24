/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const copy = require('./src/copy/copy')

// You can delete this file if you're not using it

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // Your component that should be rendered for every item in JSON.
  const template = path.resolve(`src/pages/player.js`)

  // Create pages for each JSON entry.
  copy.players.forEach(player => {
    const path = player.strRoute
    const data = player

    createPage({
      path,
      component: template,

      // Send additional data to page from JSON (or query inside template)
      context: {
        path,
        data,
      },
    })
  })
}
