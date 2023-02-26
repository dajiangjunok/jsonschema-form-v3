// import { defineComponent } from "vue";
import SelectionWidget from "./SelectionWidget";
import TextWidget from "./TextWidget";
import NumberWidget from "./NumberWidget";
// import { CommonWidgetPropsDefine, CommonWidgetDefine } from "../types";

// const CommonWidget: CommonWidgetDefine = defineComponent({
//   name: "CommonWidget",
//   props: CommonWidgetPropsDefine,
//   setup() {
//     return () => {
//       return null;
//     };
//   },
// });

export default {
  widgets: {
    SelectionWidget,
    TextWidget,
    NumberWidget,
  },
};
