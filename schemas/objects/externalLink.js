export default {
  name: "externalLink",
  type: "object",
  blockEditor: {
    icon: () => "E",
  },
  fields: [
    {
      name: "link",
      type: "string",
    },
    {
      name: "newTab",
      type: "boolean",
    },
  ],
};
