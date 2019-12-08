module.exports = {
  siteMetadata: {
    title: 'React for Design',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 900,
            quality: 80,
            backgroundColor: 'transparent',
            linkImagesToOriginal: false,
          },
        },
      ],
    },
  },
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-129140072-1",
        cookieDomain: "react.design",
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'React for Design',
        short_name: 'React For Design',
        start_url: '/',
        background_color: '#040404',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
