import instance  from './base-api'

export const vacantApi = {
  getVacancies: (currentPage = null) => {
    return instance.get('job-vacancy', {
      params: {
        page: currentPage,
      },
    })
  },

  createVacancies: (formData) => {
    return instance.post('job-vacancy', formData)
  },

  createApply: (formData) => {
    return instance.post('job-apply', formData)
  },

  getApplieses: () => {
    return instance.get('job-apply')
  },

  auth: (formData) => {
    return instance.post('/login', formData)
  },
}
