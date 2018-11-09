import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>Hello</h2>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
