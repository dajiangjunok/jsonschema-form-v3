import { defineComponent } from "vue";
import { FiledPropsDefine } from "../types";

export default defineComponent({
  name: "ObjectFiled",
  props: FiledPropsDefine,
  setup() {
    return () => {
      return <div>Object filed</div>;
    };
  },
});
