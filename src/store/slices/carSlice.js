import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services/cars.services";

const initialState = {
    cars: [],
    error: null,
    carForUpdate: null,
    loading: false
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }

    }
);

const create = createAsyncThunk(
    "carSlice/create",
    async ({car}, {rejectWithValue}) => {
        try {
          const {data} = await carService.create(car);
          return data;
        } catch (e) {
            return  rejectWithValue(e.response.data);
        }
    }

);

const deleteCar = createAsyncThunk(
    "carSlice/deleteById",
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const updateById = createAsyncThunk(
    "carSlice/updateById",
    async ({id, car}, {rejectWithValue}) => {
        try {
           const {data} = await carService.updateById(id, car);
           return data;
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        update: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
                state.error = null;
                state.loading = null;
            })
            .addCase(create.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                const carIndex = state.cars.findIndex(car => car.id === action.payload)
                state.cars.slice(carIndex, 1)
            })
            .addCase(updateById.fulfilled, (state, action) => {
                const findCar = state.cars.find(car => car.id === action.payload.id);
                Object.assign(findCar, action.payload);
            })
            .addDefaultCase((state, action) => {
               const {pathElement} = action.type.split('/').splice(-1);
               if (pathElement === 'reject') {
                   state.errors = action.payload;
                   state.loading = false;
               }
            })
});

const {reducer: carReducer, actions: {update}} = carSlice;

const carActions = {
    getAll,
    create,
    deleteCar,
    updateById,
    update
};

export {
    carReducer,
    carActions
};