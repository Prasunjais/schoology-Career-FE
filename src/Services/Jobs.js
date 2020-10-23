import axios from 'axios';
import { api as APIConfig } from '../AppConfig';

//Get list of all application
export const getAllJobs = async (page = 1, search = "") => {
  let request = await axios.get(
    APIConfig.base_url + `/jobs?page=${page}&search=${search}`
  )

  return request;
}

//Get list of all application
export const getJobDetails = async (id) => {
  let request = await axios.get(
    APIConfig.base_url + `/jobs/${id}`
  )

  return request;
}

