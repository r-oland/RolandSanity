import Tech from "../../assets/Tech";

export default {
  name: "technologies",
  type: "document",
  icon: Tech,
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "icon",
      type: "image",
      description:
        "icon has to be #000000 generator: https://codepen.io/sosuke/pen/Pjoqqp",
    },
    {
      name: "design",
      type: "boolean",
    },
  ],
};
