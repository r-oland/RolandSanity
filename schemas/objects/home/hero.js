export default {
  name: "hero",
  type: "object",

  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      name: "title",
      type: "localeString",
    },
    {
      name: "headshot",
      type: "image",
    },
    {
      name: "explanation",
      type: "localeString",
    },
  ],
};
