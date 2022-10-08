import homer from './photos/Homer_Simpson.jpg'
import marge from './photos/MargeSimpson.jpg'
import bart from './photos/Bart_Simpson.jpg'
import lisa from './photos/Lisa_Simpson.jpg'
import meggie from './photos/Maggie_Simpson.jpg'


export let data = [

    {
        "id": 1,
        "name": 'Homer',
        "lastName": 'Simpson',
        "age": 39,
        "gender": 'Male',
        "photo": homer
    },
    {
        "id": 2,
        "name": 'Marge',
        "lastName": 'Simpson',
        "age": 34,
        "gender": 'Female',
        "photo": marge

    },
    {
        "id": 3,
        "name": 'Bart',
        "lastName": 'Simpson',
        "age": 10,
        "gender": 'Male',
        "photo": bart
    },
    {
        "id": 4,
        "name": 'Lisa',
        "lastName": 'Simpson',
        "age": 8,
        "gender": 'Female',
        "photo": lisa
    },
    {
        "id": 5,
        "name": 'Meggie',
        "lastName": 'Simpson',
        "age": 1,
        "gender": 'Female',
        "photo": meggie
    }
]

console.log(data)