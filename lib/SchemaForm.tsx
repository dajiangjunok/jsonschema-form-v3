import { defineComponent } from "vue";

import { FiledPropsDefine } from "./types";

import SchemaItem from "./SchemaItem";

export default defineComponent({
  name: "SchemaForm",
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v);
    };

    return () => {
      const { schema, value } = props;
      return (
        <SchemaItem schema={schema} onChange={handleChange} value={value} />
      );
    };
  },
});
