import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import faqs from "./schemas/arrays/faqs";
import HeadItems from "./schemas/arrays/HeadItems";
import jobs from "./schemas/arrays/jobs";
import questions from "./schemas/arrays/questions";
import salePoints from "./schemas/arrays/salePoints";
import About from "./schemas/documents/About";
import FAQ from "./schemas/documents/FAQ";
import Home from "./schemas/documents/Home";
import Work from "./schemas/documents/Work";
import faq from "./schemas/objects/faq";
import headItem from "./schemas/objects/headItem";
import job from "./schemas/objects/job";
import question from "./schemas/objects/question";
import salePoint from "./schemas/objects/salePoint";
import localeBlock from "./schemas/types/localeBlock";
import localeString from "./schemas/types/localeString";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    localeString,
    localeBlock,
    HeadItems,
    headItem,
    Home,
    FAQ,
    Work,
    About,
    salePoint,
    salePoints,
    question,
    questions,
    jobs,
    job,
    faq,
    faqs,
  ]),
});
