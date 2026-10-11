// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Types
import type { JSX } from "react";
export interface NavMenuEntry {
    id: number;
    label: string;
    route: string;
    function: () => void;
}
interface Props {
    children: JSX.Element;
    leftSidebarMenu?: NavMenuEntry[];
    rightSidebarMenu?: NavMenuEntry[];
    headerMenu?: NavMenuEntry[];
}

export default function AppLayout(props: Props) {
    return (
        <div className="flex flex-col bg-zinc-950 w-full min-h-screen">
            <Header menu={props.headerMenu} />
            <div className="flex gap-3 grow">
                {props.leftSidebarMenu && <Sidebar side="left" menu={props.leftSidebarMenu} />}
                {props.children}
                {props.rightSidebarMenu && <Sidebar side="right" menu={props.rightSidebarMenu} />}
            </div>
        </div>
    )
}