import { mount, shallowMount } from "@vue/test-utils";
import { defineComponent, h } from "vue";

import JsonSchemaForm, { NumberFiled } from "../../lib";
import TestComponent from "./utils/TestComponent";

describe("JsonSchemaFrom", () => {
  it("should render correct number field", async () => {
    let value = "";
    const wrapper = mount(TestComponent, {
      props: {
        schema: {
          type: "number",
        },
        value: value,
        onChange: (v: any) => {
          value = v;
        },
      },
    });

    const numberFiled = wrapper.findComponent(NumberFiled);
    expect(numberFiled.exists()).toBeTruthy();
    // await numberFiled.props('onChange')('123')
    const input = numberFiled.find("input");
    input.element.value = "123";
    input.trigger("input");
    expect(value).toBe(123);
  });
});
