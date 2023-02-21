import { defineComponent, Ref, ref } from "vue";
import { createUseStyles } from "vue-jss";

import MonacoEditor from "./components/MonacoEditor";

function toJson(data: unknown) {
  return JSON.stringify(data, null, 2);
}

const schema = {
  type: "string",
};

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
});

export default defineComponent({
  setup() {
    const schemaRef: Ref<unknown> = ref(schema);

    const handleCodeChange = (code: string) => {
      let schema: unknown;
      try {
        schema = JSON.parse(code);
      } catch (e) {
        console.log(e);
      }
      schemaRef.value = schema;
    };

    const classesRef = useStyles();

    return () => {
      const code = toJson(schemaRef.value);
      const classes = classesRef.value;

      return (
        <div>
          <MonacoEditor
            title="schema"
            code={code}
            onChange={handleCodeChange}
            class={classes.editor}
          />
        </div>
      );
    };
  },
});
