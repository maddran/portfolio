module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.madhav.me`,
    // Your Name
    name: 'Madhav (Maddie) Narendran',
    // Main Site Title
    title: `madhav.me`,
    // Description that goes under your name in main bio
    description: `Data Scientist • Calgary, AB`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/maddran`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/madhavnaren/`,
    // Content of the About Me section
    about: `I am a data nerd with a passion for developing data-driven solutions for real-world problems.
    My areas of interest (so far) are related to applied machine learning in fields such as public health, news media, and sports.`,
    
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'NHL Scores App',
        description:
          'My first foray into interactive visualization with Dash for Python. **Fair warning, the app takes a minute to load up as it\'s hosted on a free Heroku dyno.',
        link: 'https://nhl-scores-app.herokuapp.com/',
      },

    ],   
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'MSc Data Science - University of Helsinki',
        description: 'Helsinki, Finland • 2019 - 2021',
        link: '',
      },
      {
        name: 'BSc Electrical Engineering - University of Calgary',
        description: 'Calgary, Canada • 2010 - 2016',
        link: '',
      },
      {
        name: 'BA Economics - University of Calgary',
        description: 'Calgary, Canada • 2010 - 2016',
        link: '',
      }        
    ], 
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'University of Helsinki',
        description: 'Research Assistant - Algorithmic Data Science, February 2020 - September 2020',
        link: '',
      },
      {
        name: 'CESAR (Canadian Energy Systems Analysis Research)',
        description: 'Energy Systems Analyst, February 2019 - August 2019',
        link: '',
      },
      {
        name: 'BP Canada Energy Group',
        description: 'Trade Analyst / Commodity Risk Analyst, June 2016 - October 2017',
        link: '',
      },
    ],
    
    
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python • R • C++ • MATLAB • SQL',
      },
      {
        name: 'Tools / Modules',
        description: 
          'Jupyter • Dash • Dask • NLTK • Spacy • NetworkX • Scikit-Learn • PyTorch • PySpark',
      },
      {
        name: 'Concepts',
        description:
          'Natural Language Processing (NLP) • Network Analysis • Deep Learning • Data Mining • Distributed and Parallel Computing',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
