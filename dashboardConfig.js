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
  ],
};
