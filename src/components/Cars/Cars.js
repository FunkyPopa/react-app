import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services/cars.services";
import {Car} from "../Car/Car";
import {CarForm} from "../Car Form/CarForm";
import {carActions} from "../../store";

const Cars = () => {
   const {cars} = useSelector(state => state.carReducer);
   const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch]);


    return (
        <div>
            <CarForm update={update} setUpdate={setUpdate}/>
            <hr/>
            <div>
                {cars.map((car) => (<Car car={car} key={car.id} setUpdate={setUpdate}/>))}
            </div>
        </div>
    );
};

export {Cars};