export const SchemaFormContextKey = Symbol("schemaFormCTX");
import { inject } from "vue";
import { CommonFieldType } from "./types";

export function useVJSFContext() {
  const context: { SchemaItem: CommonFieldType } | undefined =
    inject(SchemaFormContextKey);

  if (!context) {
    throw Error("SchemaForm needed");
  }

  return context;
}
