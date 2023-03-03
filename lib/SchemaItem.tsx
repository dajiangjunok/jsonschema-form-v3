import { defineComponent, computed } from "vue";
import { SchemaTypes, FiledPropsDefine } from "./types";
import { retrieveSchema } from "./utils";

import NumberField from "./fields/NumberFiled";
import StringField from "./fields/StringFiled";
import ObjectFiled from "./fields/ObjectFiled";
import ArrayFiled from "./fields/ArrayFiled";
import { useVJSFContext } from "./context";

export default defineComponent({
  name: "SchemaItem",
  props: FiledPropsDefine,
  setup(props) {
    // const { schema, rootSchema, value } = props;

    const formContext = useVJSFContext();
    const retrievedSchemaRef = computed(() => {
      return formContext.transformSchemaRef.value(
        retrieveSchema(props.schema, props.rootSchema, props.value),
      );
    });

    return () => {
      const { schema } = props;
      const retrievedSchema = retrievedSchemaRef.value;
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
        case SchemaTypes.OBJECT: {
          Component = ObjectFiled;
          break;
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayFiled;
          break;
        }
        default: {
          console.warn(`${type} is not supported`);
          break;
        }
      }

      return <Component {...props} schema={retrievedSchema} />;
    };
  },
});
