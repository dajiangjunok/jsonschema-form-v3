import { defineComponent } from "vue";
import { SchemaTypes, FiledPropsDefine } from "./types";

import NumberField from "./fields/NumberFiled.vue";
import StringField from "./fields/StringFiled.vue";

export default defineComponent({
  name: "SchemaItem",
  props: FiledPropsDefine,
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
