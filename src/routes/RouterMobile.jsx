import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mobile from "../views/Mobile/Mobile";

const routerMobile = createBrowserRouter([
    {
        path:'/',
        element: <Mobile />,
    }
]);

export default function RouterMobile(){
    return(
        <RouterProvider router={routerMobile}/>
    )
}