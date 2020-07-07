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
      name: "title",
      type: "string",
    },
    {
      name: "subTitle",
      type: "text",
      rows: 2,
    },
    {
      name: "image",
      type: "image",
      description: "Aspect ratio 16/9",
    },
    {
      name: "date",
      type: "date",
    },
    {
      name: "readTime",
      type: "number",
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "imageBlock" }, { type: "textBlock" }],
    },
  ],
};
