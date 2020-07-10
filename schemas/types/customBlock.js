export default {
  name: "customBlock",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Header", value: "h2" },
        { title: "SubHeader", value: "h4" },
      ],
      marks: {
        annotations: [
          {
            type: "externalLink",
          },
          {
            type: "internalLink",
          },
        ],
      },
    },
    {
      type: "customImage",
    },
  ],
};
