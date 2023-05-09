import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import AddCoffee from "../components/Addcoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/coffee",
                element: <Coffee />,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: "/addCoffee",
                element: <AddCoffee />
            },
            {
                path: "/updateCoffee/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            }
        ]
    }
]);

export default Router