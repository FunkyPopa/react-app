export default function Simpson(props) {
    let {item:value} = props


    return (<div className="block">
            <img className="photo" src={value.photo} />
            <h2 className="name">{value.id}. {value.name} {value.lastName}</h2>
            <div className="box">
                <p className="age">{value.age}</p>
                <p className={value.gender}>{value.gender}</p>
            </div>
        </div>
    )
}