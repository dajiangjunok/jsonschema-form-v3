import {
  defineComponent,
  PropType,
  provide,
  Ref,
  watchEffect,
  watch,
  shallowRef,
} from "vue";

import Ajv, { Options } from "ajv";

import { Schema } from "./types";

import SchemaItem from "./SchemaItem";
import { SchemaFormContextKey } from "./context";

import { validateFormData, ErrorSchema } from "./validator";

type A = typeof SchemaItem;

interface ContextRef {
  doValidate: () => {
    errors: any[];
    valid: boolean;
  };
}

const defaultAjvOptions: Options = {
  allErrors: true,
};

export default defineComponent({
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
    contextRef: {
      type: Object as PropType<Ref<ContextRef | undefined>>,
    },
    ajvOptions: {
      type: Object as PropType<Options>,
    },
    locale: {
      type: String,
      default: "zh",
    },
  },
  name: "SchemaForm",
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v);
    };

    const context: any = {
      SchemaItem,
    };

    const errorSchemaRef: Ref<ErrorSchema> = shallowRef({});
    const validatorRef: Ref<Ajv.Ajv> = shallowRef() as any;

    watchEffect(() => {
      validatorRef.value = new Ajv({
        ...defaultAjvOptions,
        ...props.ajvOptions,
      });
    });

    watch(
      () => props.contextRef,
      () => {
        if (props.contextRef) {
          props.contextRef.value = {
            doValidate() {
              console.log("--------->");

              const result = validateFormData(
                validatorRef.value,
                props.value,
                props.schema,
                props.locale,
              );

              errorSchemaRef.value = result.errorSchema;

              return result;
            },
          };
        }
      },
      {
        immediate: true,
      },
    );

    provide(SchemaFormContextKey, context);

    return () => {
      const { schema, value } = props;
      return (
        <SchemaItem
          schema={schema}
          errorSchema={errorSchemaRef.value || {}}
          rootSchema={schema}
          value={value}
          onChange={handleChange}
        />
      );
    };
  },
});
