import css from "./Car.module.css"
import {carService} from "../../services/cars.services";

const Car = ({item, setCars, setUpdate}) => {
    let {id, model, price, year} = item
    const deleteCar = async (id) => {
        await carService.deleteById(id)
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1);
            return [...cars]
        });
    };


    return (
        <div className={css.car}>
            <div>
                <div>Id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <div className={css.tools}>
                <button onClick={() => setUpdate(item)}>Update</button>
                <button onClick={() => deleteCar(id)}>Delete</button>
            </div>
        </div>
    );
};

export {Car};