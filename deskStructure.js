import S from "@sanity/desk-tool/structure-builder";
import Home from "./assets/Home";
import Order from "./assets/Order";
import Person from "./assets/Person";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Roland")
        .icon(Person)
        .child(
          S.editor().schemaType("roland").documentId("roland").title("Roland")
        ),
      S.listItem()
        .title("Home")
        .icon(Home)
        .child(S.editor().schemaType("home").documentId("home").title("Home")),
      S.listItem()
        .title("Ordered items")
        .icon(Order)
        .child(
          S.list()
            .title("Ordered items")
            .items([
              S.listItem()
                .title("Work page")
                .icon(Order)
                .child(
                  S.editor()
                    .schemaType("workPage")
                    .documentId("workPage")
                    .title("Work page")
                ),
              S.listItem()
                .title("Work order")
                .icon(Order)
                .child(
                  S.editor()
                    .schemaType("workOrder")
                    .documentId("workOrder")
                    .title("Work order")
                ),
              S.listItem()
                .title("Tech order")
                .icon(Order)
                .child(
                  S.editor()
                    .schemaType("techOrder")
                    .documentId("techOrder")
                    .title("Tech order")
                ),
            ])
        ),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["roland", "home", "workOrder", "workPage", "techOrder"].includes(
            listItem.getId()
          )
      ),
    ]);
