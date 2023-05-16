import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mobile from "../views/Mobile/Mobile";
import About from "../pages/About/About";
import Home from "../pages/Home/Home"
import Portafolio from "../pages/Portafolio/Portafolio";
import PropTypes from 'prop-types';


export default function Router({windowSize}){

    const routerMobile = createBrowserRouter([
        {
            path:'/',
            element: (windowSize >= 744)?<h1>Modo Tablet y Desktop</h1>:<Mobile/>,
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
                            element: <h1>Soy basico</h1>
                        },
                        {
                            path:"/portafolio/intermedio",
                            element: <h1>Soy intermedio</h1>
                        },
                        {
                            path:"/portafolio/avanzado",
                            element: <h1>Soy avanzado</h1>
                        },
                    ]
                }
                
            ]
        }
    ]);
    return(
        <RouterProvider router={routerMobile}/>
    )
}

Router.propTypes = {
    windowSize: PropTypes.number,
}