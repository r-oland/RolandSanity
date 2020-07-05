import Post from "../../assets/Post";

export default {
  name: "blog",
  type: "document",
  icon: Post,
  fields: [
    {
      name: "seo",
      type: "blogSeo",
    },
    {
      name: "name",
      type: "string",
    },
    {
      name: "image",
      type: "image",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
