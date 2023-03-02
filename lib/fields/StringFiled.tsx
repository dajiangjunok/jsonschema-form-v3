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
      const widgetRef = getWidget(CommonWidgetNames.TextWidget, props);
      return (widgetRef as any).value;
    });
    const widgetOptionsRef = computed(() => {
      const { widget, properties, items, ...rest } = props.uiSchema;

      return rest;
    });

    return () => {
      const { errorSchema, onChange, ...rest } = props;

      const TextWidget = TextWidgetRef.value;

      return (
        <TextWidget
          {...rest}
          errors={errorSchema.__errors}
          onChange={handleChange}
          options={widgetOptionsRef.value}
        />
      );

      // return <input type="text"  value={props.value as any} />;
    };
  },
});
