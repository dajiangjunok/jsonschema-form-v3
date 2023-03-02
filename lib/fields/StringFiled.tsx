import { computed, defineComponent } from "vue";

import { FiledPropsDefine, CommonWidgetNames } from "../types";
import { getWidget } from "../theme";

export default defineComponent({
  name: "StringFeild",
  props: FiledPropsDefine,
  setup(props) {
    const handleChange = (v: string) => {
      props.onChange(v);
    };

    const TextWidgetRef = computed(() => {
      const widgetRef = getWidget(CommonWidgetNames.TextWidget, props.uiSchema);
      return (widgetRef as any).value;
    });

    return () => {
      const { errorSchema, onChange, ...rest } = props;

      const TextWidget = TextWidgetRef.value;

      return (
        <TextWidget
          {...rest}
          errors={errorSchema.__errors}
          onChange={handleChange}
        />
      );

      // return (
      //   <input type="text" value={props.value as any} onInput={handleChange} />
      // )
    };
  },
});
