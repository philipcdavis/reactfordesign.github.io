module.exports = {
  siteMetadata: {
    title: 'React for Design',
    author: "@philipcdavis",
    image: "https://farm2.staticflickr.com/1849/43676135265_5d6be8f15a_o.png",
    description: "React is a powerful design tool. There's a lot you can do with it that would be difficult with a traditional design application. Prototyping with realistic data sets, creating complex interactions and shared component libraries are just the tip of the iceberg.",
    lang: "en",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Chivo\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
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
        "gatsby-remark-prismjs",
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 900,
            quality: 80,
            loading: "auto",
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
