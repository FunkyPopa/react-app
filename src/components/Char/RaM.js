export default function Char(props) {
    let {character: value} = props

    return (
        <div className="block">
            <img className="photo" src={value.image} />
            <h2 className="name">{value.id}. {value.name}</h2>
            <div className="box">
                <p className={value.status}>{value.status}</p>
                <p className={value.gender}>{value.gender}</p>
                <p className="species">{value.species}</p>
            </div>
        </div>
    )
}