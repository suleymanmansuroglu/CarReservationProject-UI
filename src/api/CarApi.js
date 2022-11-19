import axios from "axios";

export const AddCar = async (item) => {
  return await axios({
    method: "post",
    url: process.env.REACT_APP_API_URL + "/api/CarModel/AddCar",
    data: item,
  });
};

export const GetCars = async () => {
  return await axios.get(
    process.env.REACT_APP_API_URL + "/api/CarModel/GetList"
  );
};
