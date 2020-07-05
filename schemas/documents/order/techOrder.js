export default {
  name: "techOrder",
  type: "document",
  fields: [
    {
      name: "development",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technologies" }] }],
    },
    {
      name: "design",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technologies" }] }],
    },
  ],
};
