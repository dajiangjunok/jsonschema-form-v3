import { defineComponent, PropType } from "vue";
import { Schema, SchemaTypes } from "./types";

import NumberField from "./fields/NumberField";
import StringField from "./fields/StringField";

export default defineComponent({
  name: "SchemaItem",
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
    return () => {
      const { schema } = props;
      // TODO: 如果type不指定，可以猜测这个type
      const type = schema.type;
      let Component: any;

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField;
          break;
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField;
          break;
        }
        default: {
          console.warn(`${type} is not supported`);
          break;
        }
      }

      return <Component {...props} />;
    };
  },
});
