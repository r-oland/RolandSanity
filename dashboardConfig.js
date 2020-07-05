import { env, env2 } from "./netlify";

export default {
  widgets: [
    {
      name: "project-info",
    },
    {
      name: "project-users",
    },
    {
      name: "netlify",
      options: {
        title: "Netlify",
        sites: [
          {
            title: "rolandbranten",
            apiId: env.id,
            buildHookId: env.hook,
            name: "rolandbranten",
          },
          {
            title: "CV",
            apiId: env2.id,
            buildHookId: env2.hook,
            name: "cvrolandbranten",
          },
        ],
      },
    },
    {
      name: "gatsby",
      options: {
        sites: [
          {
            siteUrl: "https://rolandbranten-3456137451.gtsb.io/",
          },
        ],
      },
    },
    {
      name: "gatsby",
      options: {
        sites: [
          {
            siteUrl: "https://cv-4233448647.gtsb.io/",
          },
        ],
      },
    },
  ],
};
