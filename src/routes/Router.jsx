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

//Apps
import CalculatorBase from "../App/Calculator/Calculator";
import AppAccountant from "../App/Accountant/Accountant";
import AppChronometer from "../App/Chronometer/Chronometer";
import AppDigitalClock from "../App/DigitalClock/DigitalClock";
import AppSlider from "../App/Slider/Slider";

//Images
import calculator from '../assets/Images/calculator.jpg';
import chronometer from '../assets/Images/chronometer.jpg';
import accountant from '../assets/Images/accountant.jpg';
import relojDigital from '../assets/Images/reloj-digital.jpg';
import slider from '../assets/Images/slider.jpg';

export default function Router({windowSize}){
    
    const dataProjects = [
        {id:1,name:"Calculadora",description: "React, Sass, HTML5", nivel:"Basico",project:<CalculatorBase />, link:"",img:calculator,},
        {id:2,name:"Contador",description: "React, Sass, HTML5", nivel:"Basico",project:<AppAccountant />, link:"",img:accountant,},
        {id:3,name:"Cronometro",description: "React, Sass, HTML5", nivel:"Basico",project:<AppChronometer />, link:"",img:chronometer,},
        {id:4,name:"Reloj Digital",description: "React, Sass, HTML5", nivel:"Basico",project:<AppDigitalClock />, link:"",img:relojDigital,},
        {id:5,name:"Slider",description: "React, Sass, HTML5", nivel:"Basico",project:<AppSlider />, link:"",img:slider,},
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
                            path:"/portafolio/essential",
                            element: <SetProyects handleclick={(id)=>{selectProject(id)}} data={dataProjects} />
                        },
                        {
                            path:"/portafolio/intermediate",
                            element: <></>
                        },
                        {
                            path:"/portafolio/advanced",
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