import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  PropType,
  provide,
} from "vue";
import { Theme } from "./types";

const THEME_PROVIDER_KEY = Symbol("THEME_PROVIDER_KEY");

export default defineComponent({
  name: "VJSFThemeProvider",
  props: {
    theme: {
      type: Object as PropType<Theme>,
    },
  },
  setup(props, { slots }) {
    const context = computed(() => props.theme);

    provide(THEME_PROVIDER_KEY, context);

    return () => {
      return slots.default && slots.default();
    };
  },
});

export function getWidget(name: string) {
  const context: ComputedRef | undefined =
    inject<ComputedRef<Theme>>(THEME_PROVIDER_KEY);

  if (!context) {
    throw new Error("vjsf theme required");
  }

  const widgetRef = computed(() => context.value.widgets[name]);
  return widgetRef;
}
