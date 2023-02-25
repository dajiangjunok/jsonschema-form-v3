// import { mount } from "@vue/test-utils";

// import JsonSchemaForm, { NumberFiled } from "../../lib/index";

// describe("JsonSchemaForm", () => {
//   it("should render correact number filed", async () => {
//     let value = "";
//     const wrapper = mount(JsonSchemaForm, {
//       props: {
//         schema: {
//           type: "number",
//         },
//         value: value,
//         onChange: (v: any) => {
//           value = v;
//         },
//       },
//     });

//     const numberFiled = wrapper.findComponent(NumberFiled);
//     expect(numberFiled.exists()).toBeTruthy();
//     // await numberFiled.props("onChange")("111");
//     const input = numberFiled.find("input");
//     input.setValue(123);
//     input.trigger("input");

//     expect(value).toBe(123);
//   });
// });
