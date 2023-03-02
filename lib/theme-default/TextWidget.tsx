import { defineComponent, computed } from "vue";
import { CommonWidgetPropsDefine, CommonWidgetDefine } from "../types";

import { withFormItem } from "./FormItem";

const TextWidget: CommonWidgetDefine = withFormItem(
  defineComponent({
    name: "TextWidget",
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handelChange = (e: any) => {
        const value = e.target.value;
        e.target.value = props.value;
        props.onChange(value);
      };

      const styleRef = computed(() => {
        return {
          color: (props.options && props.options.color) || "black",
        };
      });

      return () => {
        const { value } = props;
        return (
          <input
            type="text"
            value={value}
            onInput={handelChange}
            style={styleRef.value}
          />
        );
      };
    },
  }),
);

export default TextWidget;
