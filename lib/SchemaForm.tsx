import { defineComponent, PropType, provide } from "vue";
import { Schema } from "./types";
import { SchemaFormContextKey } from "./context";

import SchemaItem from "./SchemaItem";

export default defineComponent({
  name: "SchemaForm",
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props) {
    const handleChange = (v: any) => {
      props.onChange(v);
    };
    const context = {
      SchemaItem,
    };

    provide(SchemaFormContextKey, context);

    return () => {
      const { schema, value } = props;
      return (
        <SchemaItem
          schema={schema}
          rootSchema={schema}
          onChange={handleChange}
          value={value}
        />
      );
    };
  },
});
