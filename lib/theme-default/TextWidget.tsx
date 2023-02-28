import { defineComponent } from "vue";
import { CommonWidgetPropsDefine, CommonWidgetDefine } from "../types";

const TextWidget: CommonWidgetDefine = defineComponent({
  name: "TextWidget",
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handelChange = (e: any) => {
      props.onChange(e.target.value);
    };

    return () => {
      const { value } = props;
      return <input type="text" value={value} onInput={handelChange} />;
    };
  },
});

export default TextWidget;
