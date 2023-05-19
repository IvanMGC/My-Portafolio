import { useLocation } from "react-router-dom";

export const useFilterPage=()=>{
    const location = useLocation().pathname;
    const filterPage = () =>{
        const pageNames = {
            "/":"Inicio",
            "/about":"Sobre mi",
            "/portafolio":"Portafolio",
        };
        let route = "";
        for(const prop in pageNames){
            if(location.includes(prop)){
                route=prop;
            }
        }
        return pageNames[route];
    };

    return filterPage()
};