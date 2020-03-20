import React from "react"
import Helmet from "react-helmet"
import { Container } from "theme-ui"

import "./layout.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Inter:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container px={4}>
        <main>{children}</main>
      </Container>
    </>
  )
}
