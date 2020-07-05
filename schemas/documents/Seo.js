import Search from "../../assets/Search";

export default {
  name: "seo",
  type: "document",
  icon: Search,
  fields: [
    {
      name: "page",
      type: "string",
    },
    {
      name: "title",
      type: "localeString",
    },
    {
      name: "description",
      type: "localeString",
    },
    {
      name: "keywords",
      type: "localeString",
    },
  ],
};
