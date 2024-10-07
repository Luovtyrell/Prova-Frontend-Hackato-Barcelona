import axios from "axios";

const apiFetchActivity = async (filter) => {
  const url = filter ? `/filter?type=${filter}` : "/random";
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
    },
  });
  return response.data;
};

export default apiFetchActivity;