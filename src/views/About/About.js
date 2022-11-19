import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getCars } from "../../redux/actions/CarActions";

export default function About() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const cars = useSelector((state) => state.Car.cars);
  useEffect(() => {
    dispatch(getCars());
  }, [cars]);

  return (
    <div>
      <Typography variant="h1">About</Typography>
      <Stack direction={"column"}>
      {cars &&
        cars.map((car, i) => (
          
            <p  id={i} >Araç : ID={car.id} Status=<b>{car.status}</b></p>
            
          
        ))}
</Stack>
      <Button
        onClick={() => {
          nav("/");
        }}
        variant="contained"
      >Ana Sayfa</Button>
    </div>
  );
}
