import {Headers} from "../components";
import {Outlet} from "react-router-dom";

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