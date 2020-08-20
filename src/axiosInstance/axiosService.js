import axiosInstance from "./axiosInstance";

export const read = (endpoint) => {
  return axiosInstance.get(endpoint);
};

export const create = (endpoint, data) => {
  return axiosInstance.post(endpoint, data);
};

export const update = (endpoint, data) => {
  return axiosInstance.put(endpoint, data);
};

export const deleteData = (endpoint, id) => {
  return axiosInstance.delete(endpoint, id);
};