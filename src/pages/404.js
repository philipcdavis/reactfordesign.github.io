import React from 'react'
import Layout from '../components/layout'
import Logo from '../components/Logo'
import { Text, Box, Heading, Link } from 'rebass/styled-components'
import { GlobalStyle } from '../Tile'

const NotFoundPage = () => (
  <Layout>
    <GlobalStyle />
    <Box p={6}>
      <Logo flex={1} width="58px" display='block' />
      <Heading>404: Page Not found</Heading>
      <Text>This URL doesn&#39;t exist. Eeep.</Text>

      <Link href="https://react.design" color="white">Return Home</Link>
    </Box>
  </Layout>
)

export default NotFoundPage
