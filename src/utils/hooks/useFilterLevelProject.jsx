import { useLocation } from "react-router-dom";
import { getNumLevelsProjects } from "../functions/dataProjects";

export const useFilterLevelProject=()=>{
    const location = useLocation().pathname;

    const filterLevelProject = () =>{
        let route = "";
        let text = "";
        const pageNames = {
            "/portafolio/essential":"Essential",
            "/portafolio/intermediate":"Intermediate",
            "/portafolio/advanced":"Advanced",
        };
        
        for(const prop in pageNames){
            if(location.includes(prop)){
                route=prop;
            }
        }
        if(getNumLevelsProjects()[pageNames[route].toLowerCase()]){
            text = "Mis proyectos";
        }else{
            text = "Por definir...";
        }
        return text;
    };

    return filterLevelProject();
};