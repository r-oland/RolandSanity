export default {
  name: "techArr",
  type: "array",
  of: [{ type: "reference", to: [{ type: "technologies" }] }],
};
