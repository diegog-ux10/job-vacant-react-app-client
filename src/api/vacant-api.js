import { instance } from "./base-api";


export const vacantApi = {
  getVacant: () => {
    return instance.get("", {
      params: {},
    });
  },
  auth: (formData) => {
    return instance.post("/login", formData)
  }
};
