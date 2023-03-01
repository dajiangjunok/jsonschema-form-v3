import { defineComponent, ref, watch } from "vue";
import { SelectWidgetPropsDefine, SelectionWidgetDefine } from "../types";

const Selection: SelectionWidgetDefine = defineComponent({
  name: "SelectionWidget",
  props: SelectWidgetPropsDefine,
  setup(props) {
    const currentValueRef = ref(props.value);

    watch(currentValueRef, (newV) => {
      if (newV !== props.value) {
        props.onChange(newV);
      }
    });

    watch(
      () => props.value,
      (v) => {
        if (v !== currentValueRef.value) {
          currentValueRef.value = v;
        }
      },
    );

    return () => {
      const { options } = props;
      return (
        <select multiple={true} v-model={currentValueRef.value}>
          {options?.map((op) => (
            <option value={op.value}>{op.key}</option>
          ))}
        </select>
      );
    };
  },
});

export default Selection;
