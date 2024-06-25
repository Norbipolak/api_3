import { createContext } from "react";
import { Outlet } from "react-router-dom";

export const MBContext = createContext();

function Nav() {

    return(
        <>
            <MBContext>
                <Outlet/>
            </MBContext>
        </>
    );
}

export default Nav;

