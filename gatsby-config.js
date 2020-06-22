module.exports = {
  siteMetadata: {
    title: `Devscord.pl`,
    author: `Devscord.pl Team`,
    description: `Blog dla każdego programisty, który chce wiedzieć więcej.`,
    siteUrl: `https://devscord.pl/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-use-dark-mode`,
      options: {
        classNameDark: "dark",
        storageKey: "theme"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: "Horizon Bold",
                parentSelector: {
                  "body.dark": "Horizon Bright Bold"
                }
              },
              extensions: ["horizon-theme-vscode"]
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-102585749-2`
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Devscord.pl`,
        short_name: `Devscord`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#95c623`,
        display: `minimal-ui`,
        icon: `content/assets/icon.jpg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Fira Code", "Roboto", "Merriweather"]
        }
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: "https-devscord-pl"
      }
    }
  ]
}
