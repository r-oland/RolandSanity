import Home from "../../assets/Home";

export default {
  name: "home",
  type: "document",
  icon: Home,
  fields: [
    { name: "hero", type: "hero" },
    { name: "sale", type: "sale" },
    { name: "chat", type: "chat" },
  ],
};
