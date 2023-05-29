import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL,
  headers:{
    "api-key":process.env.API_KEY
  },
  withCredentials:true
})