const endpoint = 'http://localhost:3333/'
// const endpoint = 'https://backendschool.vercel.app/'
// const endpoint = 'https://backend-school.fly.dev/'

import axios from 'axios'

const requestServer = async (path, data = null) => {
  const methodo = path.split('-')[0]
  const response = await axios[methodo](`${endpoint}${path}`, data)
  return response.data;
}

export default requestServer;
