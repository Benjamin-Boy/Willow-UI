// Libraries
import { Outlet } from "react-router";

// Components
import { PageLayout } from "@willow/ui";

// Data
import { componentsMenu } from "../data/sidebarMenu.tsx";

export default function Components() {
    return (
        <PageLayout leftSidebarMenu={componentsMenu} >
            <Outlet />
        </PageLayout>
    )
}
