import { defineComponent } from "vue";
import SelectionWidget from "./Selection";
import { CommonWidgetPropsDefine, CommonWidgetDefine } from "../types";

const CommonWidget: CommonWidgetDefine = defineComponent({
  name: "CommonWidget",
  props: CommonWidgetPropsDefine,
  setup() {
    return () => {
      return null;
    };
  },
});

export default {
  widgets: {
    SelectionWidget: SelectionWidget,
    TextWidget: CommonWidget,
    NumberWidget: CommonWidget,
  },
};
