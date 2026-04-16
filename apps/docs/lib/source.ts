import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { docs } from "@/.source";

export const source = loader({
  baseUrl: "/",
  source: createMDXSource(docs.docs, docs.meta),
});
