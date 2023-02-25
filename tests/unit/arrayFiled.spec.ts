// import { mount } from "@vue/test-utils";
// import JsonSchemaForm, {
//   StringFiled,
//   NumberFiled,
//   ArrayFiled,
//   SelectionWidget,
// } from "../../lib/index";

// describe("ArrayFiled", () => {
//   // 1
//   it("should render multi type", async () => {
//     const wrapper = mount(JsonSchemaForm, {
//       props: {
//         schema: {
//           type: "array",
//           items: [
//             {
//               type: "string",
//             },
//             {
//               type: "number",
//             },
//           ],
//         },
//         value: [],
//         onChange: () => ({}),
//       },
//     });

//     const strFiled = wrapper.findComponent(StringFiled);
//     const numFiled = wrapper.findComponent(NumberFiled);

//     expect(strFiled.exists()).toBeTruthy();
//     expect(numFiled.exists()).toBeTruthy();
//   });

//   // 2
//   it("should render single type", async () => {
//     const wrapper = mount(JsonSchemaForm, {
//       props: {
//         schema: {
//           type: "array",
//           items: {
//             type: "string",
//           },
//         },
//         value: ["11", "22", "33"],
//         onChange: () => ({}),
//       },
//     });

//     const strFileds = wrapper.findAllComponents(StringFiled);

//     expect(strFileds.length).toBe(3);
//   });

//   // 3
//   it("should render enum type", async () => {
//     const wrapper = mount(JsonSchemaForm, {
//       props: {
//         schema: {
//           type: "array",
//           items: {
//             enum: ["1", "2"],
//           },
//         },
//         value: [],
//         onChange: () => ({}),
//       },
//     });

//     const arr = wrapper.findComponent(ArrayFiled);
//     const select = arr.findComponent(SelectionWidget);

//     expect(select.exists()).toBeTruthy();
//   });
// });
