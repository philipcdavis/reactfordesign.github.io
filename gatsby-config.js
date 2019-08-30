module.exports = {
  siteMetadata: {
    title: 'React for Design',
  },
  plugins: [
    {
     resolve: `gatsby-transformer-remark`,
     options: {
       plugins: [
         "gatsby-remark-prismjs"
       ],
     },
   },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
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
        name: 'React for Design',
        short_name: 'React For Design',
        start_url: '/',
        background_color: '#000',
        theme_color: '#FFF',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
