import { defineComponent } from "vue";
import { CommonWidgetPropsDefine, CommonWidgetDefine } from "../types";

const NumberWidget: CommonWidgetDefine = defineComponent({
  name: "NumberWidget",
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      props.onChange(e.target.value);
    };

    return () => {
      const { value } = props;

      return <input type="number" value={value} onInput={handleChange} />;
    };
  },
});

export default NumberWidget;
