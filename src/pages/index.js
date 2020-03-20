import React from "react"
import { Box, Heading, Grid, Text, Divider, Link } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allUnsplashPhoto(limit: 10) {
        edges {
          node {
            id
            user {
              username
            }
            localImage {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const photos = data.allUnsplashPhoto.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO title="Home" />
      <Box py={4}>
        <Heading>Gatsby Source Unsplash</Heading>
        <Grid mt={4}>
          {photos.map(photo => {
            const userLink = `https://unsplash.com/@${photo.user.username}`
            return (
              <Box>
                <Img fluid={photo.localImage.childImageSharp.fluid} />
                <Box my={3}>
                  <Text sx={{ fontSize: 1 }}>
                    Photo by{" "}
                    <Text as="span">
                      <Link href={userLink} variant="photoCredit">
                        <Text as="span">{photo.user.username}</Text>
                      </Link>
                    </Text>
                  </Text>
                </Box>
                <Divider />
              </Box>
            )
          })}
        </Grid>
      </Box>
    </Layout>
  )
}

export default IndexPage
