export const getMinRate = (values, rate) => {
  switch (rate) {
    case "RUB":
      const rubValues = values.map((value) => {
        return Math.abs(value?.RUB?.toFixed(3));
      });
      return rubValues.indexOf(Math.min(...rubValues));
    case "EUR":
      const eurValues = values.map((value) => {
        return Math.abs(value?.EUR?.toFixed(3));
      });
      return eurValues.indexOf(Math.min(...eurValues));
    case "USD":
      const usdValues = values.map((value) => {
        return Math.abs(value?.USD?.toFixed(3));
      });
      return usdValues.indexOf(Math.min(...usdValues));
    case "RUB/USD":
      const rubUsdValues = values.map((value) => {
        return Math.abs((value.RUB / value.USD)?.toFixed(3));
      });
      return rubUsdValues.indexOf(Math.min(...rubUsdValues));
    case "RUB/EUR":
      const rubEurValues = values.map((value) => {
        return Math.abs((value.RUB / value.EUR)?.toFixed(3));
      });
      return rubEurValues.indexOf(Math.min(...rubEurValues));
    case "EUR/USD":
      const eurUsdValues = values.map((value) => {
        return Math.abs((value.EUR / value.USD)?.toFixed(3));
      });
      return eurUsdValues.indexOf(Math.min(...eurUsdValues));
  }
};
