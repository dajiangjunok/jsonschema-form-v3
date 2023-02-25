export const SchemaFormContextKey = Symbol("schemaFormCTX");
import { inject } from "vue";
import { CommonFieldType, Theme } from "./types";

export function useVJSFContext() {
  const context: { theme: Theme; SchemaItem: CommonFieldType } | undefined =
    inject(SchemaFormContextKey);

  if (!context) {
    throw Error("SchemaForm needed");
  }

  return context;
}
