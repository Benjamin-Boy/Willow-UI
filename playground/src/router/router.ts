// Libraries
import { createBrowserRouter } from "react-router";
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
                children: componentsMenu.map((menu) => {
                    return { path: menu.route }
                }) as RouteObject[],
            },
            //   {
            //     path: "auth",
            //     Component: AuthLayout,
            //     children: [
            //       { path: "login", Component: Login },
            //       { path: "register", Component: Register },
            //     ],
            //   },
            //   {
            //     path: "concerts",
            //     children: [
            //       { index: true, Component: ConcertsHome },
            //       { path: ":city", Component: ConcertsCity },
            //       { path: "trending", Component: ConcertsTrending },
            //     ],
            //   },
        ],
    },
]);