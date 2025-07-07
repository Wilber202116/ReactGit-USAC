import { Outlet } from "react-router-dom";

function Applayout(){
    return(
        <div className="min-h-screen bg-gray-50 p-4">
            {/*Outlet es el componenet padre que tendra cada componente hijo*/}
            <Outlet />
        </div>
    )
};

export default Applayout;