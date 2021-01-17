module.exports = {
  siteMetadata: {
    title: "Best Book Database Ever",
    description: "Social Justice Book Search",
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
