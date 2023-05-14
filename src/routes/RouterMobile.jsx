import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mobile from "../views/Mobile/Mobile";
import About from "../pages/About/About";
import Home from "../pages/Home/Home"
import Portafolio from "../pages/Portafolio/Portafolio";

const routerMobile = createBrowserRouter([
    {
        path:'/',
        element: <Mobile />,
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
                element: <Portafolio />
            }
            
        ]
    }
]);

export default function RouterMobile(){
    return(
        <RouterProvider router={routerMobile}/>
    )
}