import { instance } from "./base-api";


export const vacantApi = {
  getVacancies: () => {
    return instance.get("job-vacancy",);
  },

  createVacancies: (formData) => {
    return instance.post("job-vacancy", formData);
  },
  
  auth: (formData) => {
    return instance.post("/login", formData)
  }
};
