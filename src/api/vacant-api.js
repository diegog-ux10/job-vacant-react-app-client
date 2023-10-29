import instance from './base-api'

export const vacantApi = {
  getVacancies: (currentPage = null, id = undefined) => {
    return instance.get('job-vacancy', {
      params: {
        page: currentPage,
        id,
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
