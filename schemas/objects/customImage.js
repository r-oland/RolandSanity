export default {
  name: "customImage",
  title: "asset",
  type: "object",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "image",
      type: "image",
      options: { metadata: ["lqip"] },
    },
    {
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "gatsby-image", value: "gatsby-image" },
          { title: "image", value: "image" },
        ],
      },
    },
    {
      name: "fullWidth",
      type: "boolean",
    },
  ],
};
