export default {
  name: "chat",
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
      name: "headshot2",
      type: "image",
    },
    {
      name: "questions",
      type: "questions",
    },
  ],
};
