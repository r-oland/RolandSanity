import Person from "../../assets/Person";

export default {
  name: "roland",
  type: "document",
  icon: Person,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "contact",
      type: "contact",
    },
    {
      name: "about",
      type: "localeBlock",
    },
    {
      name: "aboutShort",
      type: "localeBlock",
    },
    {
      name: "image",
      type: "image",
    },
    {
      name: "education",
      type: "educations",
    },
  ],
};
