import PasswordWidget from "../components/PasswordWidget";
export default {
  name: "Demo",
  schema: {
    type: "object",
    properties: {
      pass1: {
        type: "string",
        // minLength: 10,
        test: true,
        title: "password",
      },
      pass2: {
        type: "string",
        minLength: 10,
        title: "re try password",
      },
      color: {
        type: "string",
        format: "color",
        title: "Input Color",
      },
    },
  },
  async customValidate(data: any, errors: any) {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        if (data.pass1 !== data.pass2) {
          errors.pass2.addError("密码必须相同");
        }
        resolve();
      }, 2000);
    });
  },
  uiSchema: {
    pass1: {
      widget: PasswordWidget,
    },
    pass2: {
      color: "red",
    },
  },
  default: {
    color: "#f50a0a",
  },
};
