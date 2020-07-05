export default {
  name: "workOrder",
  type: "document",
  fields: [
    {
      name: "projects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "work" }] }],
    },
    {
      name: "SideProjects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "work" }] }],
    },
  ],
};
