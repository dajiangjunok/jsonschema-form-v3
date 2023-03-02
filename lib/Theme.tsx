import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  PropType,
  provide,
  shallowRef,
} from "vue";
import {
  Theme,
  SelectionWidgetNames,
  CommonWidgetNames,
  UISchema,
  CommonWidgetDefine,
} from "./types";
import { isObject } from "./utils";

const THEME_PROVIDER_KEY = Symbol("THEME_PROVIDER_KEY");

/**
 * ThemeProvide  抛出主题
 */
export default defineComponent({
  name: "VJSFThemeProvider",
  props: {
    theme: {
      type: Object as PropType<Theme>,
      required: true,
    },
  },
  setup(props, { slots }) {
    const context = computed(() => props.theme);

    provide(THEME_PROVIDER_KEY, context);

    return () => slots.default && slots.default();
  },
});

/**
 * 通过getWidget函数内部inject注入主题、
 * 接收一个主题 Widget 组件名字
 */
export function getWidget<T extends SelectionWidgetNames | CommonWidgetNames>(
  name: T,
  uiSchema?: UISchema,
) {
  if (uiSchema?.widget && isObject(uiSchema.widget)) {
    return shallowRef(uiSchema.widget as CommonWidgetDefine);
  }
  const context: ComputedRef | undefined =
    inject<ComputedRef<Theme>>(THEME_PROVIDER_KEY);

  if (!context) {
    throw new Error("vjsf theme required");
  }

  const widgetRef = computed(() => context.value.widgets[name]);
  // const widgetRef = context.value.widgets[name];
  return widgetRef;
}
