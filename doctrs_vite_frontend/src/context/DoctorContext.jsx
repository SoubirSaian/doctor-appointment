import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";


export const AppContext = createContext();


const AppContextProvider = ({children}) => {

    const valye = {
        doctors
    }

    return(
        <AppContext.Provider value={valye}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;