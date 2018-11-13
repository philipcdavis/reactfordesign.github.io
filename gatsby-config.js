module.exports = {
  siteMetadata: {
    title: 'React for Design',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#000',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
