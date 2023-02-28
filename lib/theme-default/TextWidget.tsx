import { defineComponent } from "vue";
import { CommonWidgetPropsDefine, CommonWidgetDefine } from "../types";

import { withFormItem } from "./FormItem";

const TextWidget: CommonWidgetDefine = withFormItem(
  defineComponent({
    name: "TextWidget",
    props: CommonWidgetPropsDefine,
    setup(props) {
      const handelChange = (e: any) => {
        props.onChange(e.target.value);
      };

      return () => {
        const { value, schema, ...rest } = props;
        return <input type="text" value={value} onInput={handelChange} />;
      };
    },
  }),
);

export default TextWidget;
