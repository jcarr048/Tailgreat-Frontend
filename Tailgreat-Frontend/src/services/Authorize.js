import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/users/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RegisterHost = async (data) => {
  try {
    const res = await Client.post('/hosts/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/users/login', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LoginHost = async (data) => {
  try {
    const res = await Client.post('/hosts/login', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateFeedback = async (data) => {
  try {
    const res = await Client.post('feedback/:tailgate_id/:user_id', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateFeedback = async (data) => {
  try {
    const res = await Client.put(`/feedback/${data.id}`, data)
  } catch (error) {
    throw error
  }
}

export const DeleteFeedback = async (data) => {
  try {
    const res = await Client.delete(`/feedback/${data}`)
    return res.data
  } catch (error) {
    throw error
  }
}
