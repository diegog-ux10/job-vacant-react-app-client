import { instance } from "./base-api";


export const vacantApi = {
  getVacancies: () => {
    return instance.get("job-vacancy",);
  },
  
  auth: (formData) => {
    return instance.post("/login", formData)
  }
};
