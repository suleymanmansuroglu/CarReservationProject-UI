import * as React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../../redux/actions/CarActions';
import { useNavigate } from 'react-router';

export default function Home() {
    const checkCarAdded = useSelector(state => state.Car.checkCarAdded);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const handleAdd = async () => {
        dispatch(addCar({Id: 0, Status: 1}));
    }
  return (
    <div>
      <Button onClick={() => {
        nav('/about');
      }} variant="contained">Hello World</Button>
      <br/>
      <Button onClick={handleAdd} variant="contained">Araba Ekle</Button>
      <Typography>{`${checkCarAdded}`}</Typography>
    </div>
  );
}