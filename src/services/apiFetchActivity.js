import axios from "axios";

const apiFetchActivity = async () => {
  const response = await axios.get("/random", {
    headers: {
      Accept: "application/json",
    },
  });
  return response.data;
};

export default apiFetchActivity;
