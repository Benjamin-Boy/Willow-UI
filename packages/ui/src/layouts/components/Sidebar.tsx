// Libraries
import { NavLink, useLocation } from "react-router";

// Types
import type { NavMenuEntry } from "../AppLayout";
interface Props {
    side: string;
    type?: string;
    menu?: NavMenuEntry[];
}

export default function Sidebar(props: Props) {
    const location = useLocation();

    const side = props.side ?? "left";
    const type = props.type ?? "route";

    return (
        <aside className={`${side === "left" ? "border-r left-0" : "border-l right-0"} border-zinc-800 min-w-60 p-0.5 fixed`}>
            <nav>
                <ul>
                    {
                        props.menu?.map((entry: any) => {
                            const isActive = location.pathname.split("/").includes(entry.route);
                            const anchorIsActive = location.hash.split("#").includes(entry.route);

                            return (
                                <>
                                    {type === "route"

                                        ?

                                        <li key={entry.id} className={`cursor-pointer px-6 py-1 ${isActive ? "bg-zinc-900" : "hover:bg-zinc-900"} transition-all duration-200 group`}>
                                            <NavLink to={{
                                                pathname: entry.route,
                                            }} className={`text-zinc-400 ${isActive ? "text-zinc-100 " : "group-hover:text-zinc-100"}`} >
                                                {entry.label}
                                            </NavLink>
                                        </li>

                                        :
                                        <li key={entry.id} className="cursor-pointer">
                                            <div className="flex items-center group">
                                                <div className={`border-l h-8 ${anchorIsActive ? "border-primary" : "border-transparent  group-hover:border-primary"}`}></div>
                                                <a
                                                    className={`text-zinc-400 hover:text-zinc-100 hover:bg-linear-to-r from-zinc-900 via-transparent to-transparent px-8 py-1 transition-all duration-200 ${anchorIsActive ? "text-zinc-100 bg-linear-to-r from-zinc-900 via-transparent to-transparent" : ""}`}
                                                    href={`#${entry.route}`}>
                                                    {entry.label}
                                                </a>
                                            </div>
                                        </li>

                                    }
                                </>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}