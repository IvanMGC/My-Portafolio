import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mobile from "../views/Mobile/Mobile";
import About from "../pages/About/About";
import Home from "../pages/Home/Home"
import Portafolio from "../pages/Portafolio/Portafolio";
import PropTypes from 'prop-types';
import SetProyects from "../layouts/SetProyects/SetProyects";
import { useState } from "react";
import Project from "../pages/Project/Project";
import CalculatorBase from "../App/Calculator/Calculator";
import AppAccountant from "../App/Accountant/Accountant";
import AppChronometer from "../App/Chronometer/Chronometer";
import AppDigitalClock from "../App/DigitalClock/DigitalClock";
import AppSlider from "../App/Slider/Slider";


export default function Router({windowSize}){
    const dataProjects = [
        {id:1,name:"Calculadora",description: "React Sass, HTML5", nivel:"Basico",project:<CalculatorBase />, link:"",img:"",},
        {id:2,name:"Contador",description: "React Sass, HTML5", nivel:"Basico",project:<AppAccountant />, link:"",img:"",},
        {id:3,name:"Cronometro",description: "React Sass, HTML5", nivel:"Basico",project:<AppChronometer />, link:"",img:"",},
        {id:4,name:"Reloj Digital",description: "React Sass, HTML5", nivel:"Basico",project:<AppDigitalClock />, link:"",img:"",},
        {id:5,name:"Slider",description: "React Sass, HTML5", nivel:"Basico",project:<AppSlider />, link:"",img:"",},
    ];
    const [selectedProject,setSelectedProject] = useState(dataProjects[0]);
    
    const selectProject = (id) =>{
        setSelectedProject(dataProjects[id-1]);
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
                            element: <SetProyects handleclick={(id)=>{selectProject(id)}} data={dataProjects} />
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