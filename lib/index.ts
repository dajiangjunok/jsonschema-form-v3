import SchemaForm from "./SchemaForm";
import NumberFiled from "./fields/NumberFiled.vue";
import StringFiled from "./fields/StringFiled.vue";
import ArrayFiled from "./fields/ArrayFiled";
import ObjectFiled from "./fields/ObjectFiled";
import SelectionWidget from "./widgets/Selection";
import ThemeProvider from "./Theme";

export default SchemaForm;
export * from "./types";

export {
  NumberFiled,
  StringFiled,
  ArrayFiled,
  ObjectFiled,
  ThemeProvider,
  SelectionWidget,
};
