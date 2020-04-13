import { env } from "./netlify";

export default {
  widgets: [
    {
      name: "project-info"
    },
    {
      name: "project-users"
    },
    {
      name: "netlify",
      options: {
        title: "Netlify",
        sites: [
          {
            title: "rolandbranten.nl",
            apiId: env.id,
            buildHookId: env.hook,
            name: "Deploy"
          }
        ]
      }
    },
    {
      name: "gatsby",
      options: {
        sites: [
          {
            siteUrl: "https://rolandbranten-3456137451.gtsb.io/"
          }
        ]
      }
    }
  ]
};
