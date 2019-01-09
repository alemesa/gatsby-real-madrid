/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

// You can delete this file if you're not using it

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // Your component that should be rendered for every item in JSON.
  return new Promise((resolve, reject) => {
    const playerTemplate = path.resolve(`src/pages/player.js`)

    resolve(
      graphql(`
        {
          allPlayersJson {
            edges {
              node {
                strRoute
                strCutout
                strPosition
                strPlayer
                strPosition
                strNationality
                strSigning
                strDescriptionEN
                strInstagram
                strTwitter
                strThumb
                dateSigned
                dateBorn
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allPlayersJson.edges.forEach(({ node }) => {
          const path = node.strRoute
          const data = {
            strCutout: node.strCutout,
            strPosition: node.strPosition,
            strPlayer: node.strPlayer,
            strPosition: node.strPosition,
            strNationality: node.strNationality,
            strSigning: node.strSigning,
            strDescriptionEN: node.strDescriptionEN,
            strInstagram: node.strInstagram,
            strTwitter: node.strTwitter,
            strThumb: node.strThumb,
            dateSigned: node.dateSigned,
            dateBorn: node.dateBorn,
          }

          createPage({
            path,
            component: playerTemplate,
            context: {
              path,
              data,
            },
          })
        })
      })
    )
  })
}
