import { getApiUrl } from "../config";

export const getPropertyDetail = async (id) => {
  const api = `http://localhost:3000/property/${id}`;

  return await fetch(api).then((res) => res.json()).then((data) => data);
};
