import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Matthew Lewis`,
    siteUrl: `https://www.m-lewis.co.uk`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
	  { resolve: "gatsby-source-filesystem", options: { path: `./src/data/` } },
	  { resolve: "gatsby-source-filesystem", options: { name: "images", path: `./src/images/` } },
	  { resolve: "gatsby-plugin-manifest", options: { "icon": "./src/images/icon.png" } },
	  "gatsby-plugin-sharp",
	  "gatsby-plugin-image",
	  "gatsby-plugin-postcss",
	  "gatsby-transformer-sharp",
	  "gatsby-transformer-json",
  ]
};

export default config;
