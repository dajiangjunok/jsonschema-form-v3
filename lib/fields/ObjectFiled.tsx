import { defineComponent, inject } from "vue";
import { FiledPropsDefine } from "../types";
import { useVJSFContext } from "../context";
import { isObject } from "../utils";

export default defineComponent({
  name: "ObjectFiled",
  props: FiledPropsDefine,
  setup(props) {
    const context = useVJSFContext();

    const handleObjectFieldChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {};

      if (v === undefined) {
        delete value[key];
      } else {
        value[key] = v;
      }

      props.onChange(value);
    };

    return () => {
      const { SchemaItem } = context;
      const { schema, errorSchema, rootSchema, value } = props;

      const properties = schema.properties || {};
      const currentValue: any = isObject(value) ? value : {};

      return Object.keys(properties).map((k: string, index: number) => (
        <SchemaItem
          schema={properties[k]}
          errorSchema={errorSchema[k] || {}}
          rootSchema={rootSchema}
          value={currentValue[k]}
          key={index}
          onChange={(v: any) => handleObjectFieldChange(k, v)}
        />
      ));
    };
  },
});
