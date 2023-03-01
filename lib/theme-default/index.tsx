// import { defineComponent } from "vue";
import SelectionWidget from "./SelectionWidget";
import TextWidget from "./TextWidget";
import NumberWidget from "./NumberWidget";

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
