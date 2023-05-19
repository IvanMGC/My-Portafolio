import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';

//Views
import Mobile from "../views/Mobile/Mobile";

//Pages
import About from "../pages/About/About";
import Home from "../pages/Home/Home"
import Portafolio from "../pages/Portafolio/Portafolio";
import Project from "../pages/Project/Project";

//Layouts
import SetProyects from "../layouts/SetProyects/SetProyects";

//Functions
import { getProjects } from "../utils/functions/dataProjects";

export default function Router({windowSize}){
    
    const [projects] = useState(getProjects())
    const [selectedProject,setSelectedProject] = useState(projects[0]);
    
    const selectProject = (id) =>{
        setSelectedProject(projects[id-1]);
    }
    const router = createBrowserRouter([
        {
            path:'/',
            element: (windowSize >= 744)?<h1>Por el momento esta para tamaño Mobile</h1>:<Mobile/>,
            children:[
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/portafolio",
                    element: <Portafolio />,
                    children:[
                        {
                            path:"/portafolio/basico",
                            element: <SetProyects handleclick={(id)=>{selectProject(id)}} data={projects} />
                        },
                        {
                            path:"/portafolio/intermedio",
                            element: <></>
                        },
                        {
                            path:"/portafolio/avanzado",
                            element: <></>
                        },
                    ]
                },
                {
                    path:`/portafolio/${selectedProject.nivel.toLowerCase()}/${selectedProject.name.toLowerCase()}`,
                    element:<Project project={selectedProject.project} />,
                    loader: ()=>selectedProject
                },
                
            ]
        }
    ]);

    return(
        <RouterProvider router={router}/>
    )
}

Router.propTypes = {
    windowSize: PropTypes.number,
}