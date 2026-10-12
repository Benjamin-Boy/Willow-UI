// Libraries
import { createBrowserRouter, redirect } from "react-router";
import type { RouteObject } from "react-router";

// Components
import App from "../App";
import Home from "../pages/Home";
import Components from "../pages/Components";

// Page Components
import { componentsMenu } from "../data/sidebarMenu";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            {
                path: "components",
                Component: Components,
                children: [
                    {
                        index: true,
                        loader: () => redirect("/components/button"),
                    },
                    ...componentsMenu.map((menu) => {
                        return { path: menu.route, Component: menu.component }
                    }) as RouteObject[],
                ]
            },
        ],
    },
]);