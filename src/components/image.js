import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const JerseysImages = () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "home_jersey.jpeg" }) { ...fluidImage}
        imageTwo: file(relativePath: { eq: "visitor_jersey.jpeg" }) {...fluidImage}
        imageThree: file(relativePath: { eq: "third_jersey.jpeg" }) {...fluidImage}
      }
    `}
    render={data => (
      <>
        <Img className="Jersey" fluid={data.imageOne.childImageSharp.fluid} />
        <Img className="Jersey" fluid={data.imageTwo.childImageSharp.fluid} />
        <Img className="Jersey" fluid={data.imageThree.childImageSharp.fluid} />
      </>
    )}
  />
)
