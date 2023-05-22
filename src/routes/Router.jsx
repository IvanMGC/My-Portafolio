import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import Desktop from "../views/Desktop/Desktop";

export default function Router({windowSize}){
    const router = createBrowserRouter([
        {
            path:'/',
            element: (windowSize >= 744)?<Desktop />:<Mobile wSize={windowSize}/>,
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
                            path:"/portafolio/:projectLevel",
                            element: <SetProyects />
                        }
                    ]
                },
                {
                    path:"/portafolio/:projectLevel/:projectName",
                    element:<Project />,
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