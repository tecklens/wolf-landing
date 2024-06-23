import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PricingPage from "@/Pricing.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/pricing",
        element: <PricingPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </React.StrictMode>
);
