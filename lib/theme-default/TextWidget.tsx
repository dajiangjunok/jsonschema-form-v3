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

      return () => {
        const { value } = props;
        return <input type="text" value={value} onInput={handelChange} />;
      };
    },
  }),
);

export default TextWidget;
