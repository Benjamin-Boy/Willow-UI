// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// Types
import type { JSX } from "react";
import type { NavMenuEntry } from "./AppLayout";
interface Props {
    children: JSX.Element;
    leftSidebarMenu?: NavMenuEntry[];
    rightSidebarMenu?: NavMenuEntry[];
    headerMenu?: NavMenuEntry[];
}

export default function PageLayout(props: Props) {
    return (
        <div className="flex flex-col bg-zinc-950 w-full">
            <div className="flex gap-3 grow">
                {props.leftSidebarMenu && <Sidebar side="left" menu={props.leftSidebarMenu} />}
                {props.children}
                {props.rightSidebarMenu && <Sidebar type="hash" side="right" menu={props.rightSidebarMenu} />}
            </div>
        </div>
    )
}