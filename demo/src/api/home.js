import Http from "./http";
export const getData = (data) => {
  return Http.post("/search/getAllSearchList", data);
};
