import { mount } from "@vue/test-utils";

import JsonSchemaForm, { StringFiled, NumberFiled } from "../../lib/index";

const schema = {
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "number",
    },
  },
};

describe("ObjectFiled", () => {
  // 1
  it("should render properties to correct fileds", async () => {
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: schema,
        value: {},
        onChange: () => ({}),
      },
    });

    const strFiled = wrapper.findComponent(StringFiled);
    const numFiled = wrapper.findComponent(NumberFiled);

    expect(strFiled.exists()).toBeTruthy();
    expect(numFiled.exists()).toBeTruthy();
  });

  // 2
  it("should onChange trigger value is changed", async () => {
    let value: any = {
      name: "Tom",
    };
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: schema,
        value: value,
        onChange: (v: any) => {
          value = v;
        },
      },
    });

    const strFiled = wrapper.findComponent(StringFiled);

    strFiled.props("onChange")("Jerry");
    expect(value.name).toBe("Jerry");
  });

  // 3

  it("should render properties to correct fileds", async () => {
    let value: any = {
      name: "123",
    };
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema,
        value: value,
        onChange: (v: any) => {
          value = v;
        },
      },
    });

    const strFiled = wrapper.findComponent(StringFiled);
    // const numField = wrapper.findComponent(NumberFiled)
    await strFiled.props("onChange")(undefined);

    expect(value.name).toBeUndefined();
    // expect(numField.exists()).toBeTruthy()
  });

  // 4
  it("should the value is not a object", async () => {
    let value: any = 123;
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: schema,
        value: value,
        onChange: (v: any) => {
          value = v;
        },
      },
    });

    const strFiled = wrapper.findComponent(StringFiled);

    await strFiled.props("onChange")(123);
    expect(value.name).toBe(123);
  });
});
