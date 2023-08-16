import axios from "axios";

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
        baseURL:
          "https://www.fastmock.site/mock/e41bd2452975e01e25da2d8e06708fc1/jd",
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL:
          "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
