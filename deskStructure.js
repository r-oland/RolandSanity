import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title(`Home`)
        .child(
          S.document().title("Home").schemaType("Home").documentId("Home")
        ),
      S.listItem()
        .title(`About`)
        .child(
          S.document().title("About").schemaType("About").documentId("About")
        ),
      S.listItem()
        .title(`Work`)
        .child(
          S.document().title("Work").schemaType("Work").documentId("Work")
        ),
      S.listItem()
        .title(`FAQ`)
        .child(S.document().title("FAQ").schemaType("FAQ").documentId("FAQ")),
    ]);
