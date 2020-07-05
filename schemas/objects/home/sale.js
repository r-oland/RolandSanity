export default {
  name: "sale",
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
      name: "salePoints",
      type: "salePoints",
    },
  ],
};
