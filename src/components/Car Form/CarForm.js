import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi'
import {useEffect} from "react";

import {CarValidator} from "../../validators/car.validator";
import {carService} from "../../services/cars.services";
import css from "./carForm.module.css"




const CarForm = ({setCars, update, setUpdate}) => {

    let {register, handleSubmit, formState:{errors, isValid}, reset, setValue} = useForm({
        mode: "all",
        resolver:joiResolver(CarValidator)
    });

    useEffect( () => {
        if (update) {
            setValue('model', update.model, {shouldValidate: true})
            setValue('price', update.price, {shouldValidate: true})
            setValue('year', update.year, {shouldValidate: true})
        }
    },[update, setValue])

    const submit = async (car) => {
        if (update) {
          const {data} = await carService.updateById(update.id, car)
            setCars((cars) => {
                const finder = cars.find(value => value.id === update.id)
                Object.assign(finder, data)
                setUpdate(null)
                reset();
                return [...cars]
            })
        } else {

            const {data} = await carService.create(car);
            console.log(data);
            setCars(cars => [...cars, data]);
            reset();
        }
    };

    return(
        <div className={css.wrapper}>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder="Model" {...register('model', {required: true})}/>
                {errors.model && <span>{errors.model.message}</span>}
                <input placeholder="Price" {...register('price', {valueAsNumber: true})}/>
                {errors.price && <span>{errors.price.message}</span>}
                <input placeholder="Year" {...register('year', {valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}
                <button disabled={!isValid}>{update ? 'Update' : 'Save'}</button>
            </form>
        </div>
    )
};

export {CarForm};