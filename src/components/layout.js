import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import FavIcon from '../images/icon.png'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      var image = "https://farm2.staticflickr.com/1849/43676135265_5d6be8f15a_o.png"
      var description = "React is a powerful design tool. There's a lot you can do with it that would be difficult with a traditional design application. Prototyping with realistic data sets, creating complex interactions and shared component libraries are just the tip of the iceberg."
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            link={[
                { rel: 'shortcut icon', type: 'image/png', href: FavIcon }
            ]}
          >
            <html lang="en" />
            <meta property="og:url" content="https://react.design" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en" />
            <meta property="og:site_name" content="React for Design" />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@philipcdavis" />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:description" content={description} />
          </Helmet>

          <div>
            {children}
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
