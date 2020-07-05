export default {
  name: "workPage",
  type: "document",
  fields: [
    {
      name: "projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "work" }] }],
    },
  ],
};
