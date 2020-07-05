export default {
  name: "education",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    { name: "school", type: "string", title: "school" },
    { name: "year", type: "string", title: "year" },
    { name: "place", type: "string", title: "place" },
    { name: "educ", type: "localeString", title: "educ" },
    { name: "level", type: "string", title: "level" },
  ],
};
