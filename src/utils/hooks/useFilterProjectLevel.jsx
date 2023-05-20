import { useLocation } from "react-router-dom";
import { getNumLevelsProjects } from "../functions/dataProjects";


export const useFilterProjectLevel = () => {
    const location = useLocation().pathname;
    const numLevelsProjects = getNumLevelsProjects();

    const namePage = Object.keys(numLevelsProjects).filter((element)=>location.includes(element));

    const titleProjectLevel = () => {
        return (numLevelsProjects[namePage])? "Mis proyectos":"Por definir..." ;
    };

    const numberProjectsLevel = () => {
        return numLevelsProjects[namePage];
    }

    return {
        titleProjectLevel,
        numberProjectsLevel,
    };
};