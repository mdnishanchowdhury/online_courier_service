import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Reports from "../Pages/Reports";
import CreateParcel from "../Pages/CreateParcel";
import Order from "../Pages/Order";
import Dashboard from "../Pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "blog",
                element: <Blog></Blog>,
            },
            {
                path: "contacts",
                element: <Contact></Contact>,
            },
            {
                path: "services",
                element: <Services></Services>,
            },
            {
                path: "about",
                element: <About></About>,
            },
            {
                path: "reports",
                element: <Reports></Reports>,
            },
            {
                path: "createParcel",
                element: <CreateParcel></CreateParcel>,
            },
            {
                path: "order",
                element: <Order></Order>,
            },
            {
                path: "dashboard",
                element: <Dashboard></Dashboard>,
            },
        ],
    },
]);
