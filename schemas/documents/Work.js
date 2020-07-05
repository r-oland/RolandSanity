import Work from "../../assets/Work";

export default {
  name: "work",
  type: "document",
  icon: Work,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "url",
      type: "string",
    },
    {
      name: "source",
      type: "string",
    },
    {
      name: "description",
      type: "localeString",
    },

    {
      name: "period",
      type: "string",
    },
    {
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "work", value: "work" },
          { title: "freelance", value: "freelance" },
          { title: "side-project", value: "side-project" },
        ],
      },
    },
    {
      name: "technologies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "technologies" }] }],
    },
    {
      name: "work",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "front-end", value: "Front-end development" },
              { title: "back-end", value: "Back-end development" },
              { title: "cms", value: "Cms" },
              { title: "design", value: "Design" },
              { title: "library", value: "Library" },
            ],
          },
        },
      ],
    },
    {
      name: "mainImage",
      type: "image",
    },
    {
      name: "float1",
      type: "image",
    },
    {
      name: "float2",
      type: "image",
    },
    {
      name: "smallPage",
      type: "boolean",
    },
  ],
};
