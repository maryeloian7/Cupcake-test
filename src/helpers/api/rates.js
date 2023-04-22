import {
    getInitValueFirstSource,
    getInitValueSecondSource,
    getInitValueThirdSource
  } from "../../axios/rates";
  
  export const getInitData = async () => {
    const initData = await Promise.allSettled([
      getInitValueFirstSource(),
      getInitValueSecondSource(),
      getInitValueThirdSource(),
    ]);
    const formattedData = initData.map((source) => {
      if (source.status === "fulfilled") {
        return { ...source.value.data.rates, ready: true };
      } else {
        return { ready: false };
      }
    });
    return formattedData;
  };
  
  export const longPollRequest = async (axiosRequest, stateSetter) => {
    let response = await axiosRequest();
  
    if (response.status !== 200) {
      await longPollRequest(axiosRequest, stateSetter);
    } else {
      let updatedValues = response.data.rates;
      stateSetter({ ...updatedValues, ready: true });
  
      await longPollRequest(axiosRequest, stateSetter);
    }
  };