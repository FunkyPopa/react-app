import {useEffect, useState} from "react";

import {carService} from "../../services/cars.services";
import {Car} from "../Car/Car";
import {CarForm} from "../Car Form/CarForm";

const Cars = () => {
    let [cars, setCars] = useState([]);
    let [update, setUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data));
    }, []);



    return (
        <div>
            <CarForm setCars={setCars} update={update} setUpdate={setUpdate}/>
            <hr/>
            <div>
                {cars.map((value, index) => (<Car item={value} key={index} setCars={setCars} setUpdate={setUpdate}/>))}
            </div>
        </div>
    );
};

export {Cars};