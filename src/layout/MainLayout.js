import {Outlet} from "react-router-dom";

import {Headers} from "../components";

const MainLayout = () => {
    return(
        <div>
            <Headers/>
            <hr/>
            <Outlet/>
        </div>
    )
}

export {MainLayout}