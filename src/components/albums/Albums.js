import {useEffect, useState} from "react";

import {albumService} from "../../services";
import {Comment} from "../comment/Comment";
import {Album} from "../album/Album";

const Albums = () => {
   let [albums, setAlbums] = useState([])

    useEffect(() => {
        albumService.getAll.then(({data}) => {
            setAlbums(data)
            console.log(data);
        })
    }, [])

    return(
        <div>
            {
                albums.map(album => <Album item={album} key={album.id}/>)
            }
        </div>
    )

}

export {Albums}