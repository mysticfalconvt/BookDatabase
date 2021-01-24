module.exports = {
  siteMetadata: {
    title: "Best Book Database Ever",
    description: "Social Justice Book Search",
    siteUrl: "https://bookdatabase.netlify.app/",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        token: process.env.SANITY_TOKEN,
        projectId: "ih25y9d1",
        dataset: "production",
        watchMode: true,
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Goudy Bookletter 1911`,
          `source serif pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'MyNodes',
        imagePath: 'path.to.image',
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
