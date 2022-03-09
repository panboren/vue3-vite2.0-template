import axios from "axios";
class Http {
  constructor() {
    this.timeout = 10000;
    /* this.baseURL = "http://39.108.137.219:8091/";*/
    this.baseURL =
      process.env.NODE_ENV === "development"
        ? "http://39.108.137.219:8091/"
        : "/space";
  }

  mergeOptions(obj = {}) {
    return {
      timeout: this.timeout,
      baseURL: this.baseURL,
      ...obj,
    };
  }

  setInterceptor(instance) {
    instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    instance.interceptors.response.use(
      (response) => {
        if (response.status === 200) {
          if (Array.isArray(response.data)) {
            return response.data;
          }
          if (response.data.err === 1) {
            return Promise.reject(response.message);
          }
          if (response.data && response.data.code === 200) {
            if (response.data.data || response.data.dataInfo) {
              return response.data.data || response.data.dataInfo;
            }
          }
          return response.data;
        }
        if (response.status === 404) {
          return Promise.reject(response.message, "404");
        }
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  require(options) {
    const config = this.mergeOptions(options);
    const instance = axios.create();
    this.setInterceptor(instance);
    return instance(config);
  }

  get(url, config = {}) {
    return this.require({
      url,
      method: "get",
      ...config,
    });
  }

  post(url, data) {
    return this.require({
      url,
      method: "post",
      data,
    });
  }
}
export default new Http();
