export default {
  name: "textBlock",
  type: "object",
  fields: [
    {
      name: "text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Header", value: "h2" },
            { title: "SubHeader", value: "h3" },
          ],
        },
      ],
    },
  ],
};
