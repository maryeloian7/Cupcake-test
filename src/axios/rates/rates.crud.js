import {
  API_INIT_VALUE_FIRST_SOURCE,
  API_INIT_VALUE_SECOND_SOURCE,
  API_INIT_VALUE_THIRD_SOURCE,
  API_POLL_VALUE_FIRST_SOURCE,
  API_POLL_VALUE_SECOND_SOURCE,
  API_POLL_VALUE_THIRD_SOURCE,
} from "./constants";
import { ratesAxiosInstance } from "./ratesAxiosInstance";

export const getInitValueFirstSource = (params) => {
  return ratesAxiosInstance.get(API_INIT_VALUE_FIRST_SOURCE, {
    params,
  });
};

export const getInitValueSecondSource = (params) => {
  return ratesAxiosInstance.get(API_INIT_VALUE_SECOND_SOURCE, {
    params,
  });
};
export const getInitValueThirdSource = (params) => {
  return ratesAxiosInstance.get(API_INIT_VALUE_THIRD_SOURCE, {
    params,
  });
};

export const getPollValueFirstSource = (params) => {
  return ratesAxiosInstance.get(API_POLL_VALUE_FIRST_SOURCE, {
    params,
  });
};

export const getPollValueSecondSource = (params) => {
  return ratesAxiosInstance.get(API_POLL_VALUE_SECOND_SOURCE, {
    params,
  });
};

export const getPollValueThirdSource = (params) => {
  return ratesAxiosInstance.get(API_POLL_VALUE_THIRD_SOURCE, {
    params,
  });
};
