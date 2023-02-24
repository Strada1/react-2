import axios from "axios";
import { URL } from "../const";
export const fetchName = async (name) => {
  try {
    const resp = await axios.get(URL, {
      params: { name },
    });
    return await resp.data;
  } catch (e) {
    alert(e.message);
  }
};
