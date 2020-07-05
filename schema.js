import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import educations from "./schemas/arrays/educations";
import faqs from "./schemas/arrays/faqs";
import HeadItems from "./schemas/arrays/HeadItems";
import jobs from "./schemas/arrays/jobs";
import questions from "./schemas/arrays/questions";
import salePoints from "./schemas/arrays/salePoints";
import techArr from "./schemas/arrays/techArr";
import Blog from "./schemas/documents/Blog";
import Home from "./schemas/documents/Home";
import techOrder from "./schemas/documents/order/techOrder";
import workOrder from "./schemas/documents/order/workOrder";
import workPage from "./schemas/documents/order/workPage";
import Roland from "./schemas/documents/Roland";
import Seo from "./schemas/documents/Seo";
import Technologies from "./schemas/documents/Technologies";
import Work from "./schemas/documents/Work";
import blogSeo from "./schemas/objects/blogSeo";
import contact from "./schemas/objects/contact";
import education from "./schemas/objects/education";
import faq from "./schemas/objects/faq";
import headItem from "./schemas/objects/headItem";
import chat from "./schemas/objects/home/chat";
import hero from "./schemas/objects/home/hero";
import sale from "./schemas/objects/home/sale";
import illustrations from "./schemas/objects/illustrations";
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
    Work,
    salePoint,
    salePoints,
    question,
    questions,
    jobs,
    job,
    faq,
    faqs,
    illustrations,
    Roland,
    hero,
    chat,
    sale,
    Technologies,
    Blog,
    Seo,
    contact,
    education,
    educations,
    blogSeo,
    techArr,
    workPage,
    techOrder,
    workOrder,
  ]),
});
