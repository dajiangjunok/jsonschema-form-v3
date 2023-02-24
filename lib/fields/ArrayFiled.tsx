import { defineComponent } from "vue";
import { FiledPropsDefine, Schema } from "../types";
import { useVJSFContext } from "../context";
/**
 * {
 *  items:{ type :string }
 * }
 *
 * {
 *  items: [
 *    { type:string },
 *    { type: number }
 *  ]
 * }
 *
 * {
 *  items: { type: string,enum: ['1','2'] }
 * }
 */

export default defineComponent({
  name: "ArrayFiled",
  props: FiledPropsDefine,
  setup(props) {
    const context = useVJSFContext();
    const handleMutiTypeChange = (v: any, index: number) => {
      const { value } = props;
      const arr = Array.isArray(value) ? value : [];
      arr[index] = v;
      props.onChange(arr);
    };

    return () => {
      const { schema, rootSchema, value } = props;
      const { SchemaItem } = context;
      const isMultiType = Array.isArray(schema.items);

      if (isMultiType) {
        const items: Schema[] = schema.items as any;
        const arr = Array.isArray(value) ? value : [];

        return items.map((s: Schema, index: number) => (
          <SchemaItem
            schema={s}
            rootSchema={rootSchema}
            value={arr[index]}
            key={index}
            onChange={(v: any) => handleMutiTypeChange(v, index)}
          />
        ));
      }
    };
  },
});
