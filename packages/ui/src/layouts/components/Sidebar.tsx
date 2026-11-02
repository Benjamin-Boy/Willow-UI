// Libraries
import { NavLink } from "react-router";

// Types
import type { NavMenuEntry } from "../AppLayout";
interface Props {
    side: string;
    type?: string;
    menu?: NavMenuEntry[];
}

export default function Sidebar(props: Props) {
    const side = props.side ?? "left";
    const type = props.type ?? "route";

    return (
        <aside className={`${side === "left" ? "border-r left-0" : "border-l right-0"} border-zinc-800 min-w-60 p-0.5 fixed`}>
            <nav>
                <ul>
                    {
                        props.menu?.map((menu: any) => {
                            return (
                                <li key={menu.id} className="p-1">
                                    {type === "route"

                                        ?

                                        <NavLink to={{
                                            pathname: menu.route,
                                        }} className="cursor-pointer text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 px-2 py-1 rounded-md transition-all duration-200" >
                                            {menu.label}
                                        </NavLink>

                                        :

                                        <div className="flex items-center group">
                                            <div className="border-transparent border-l group-hover:border-primary h-8"></div>
                                            <a className={`cursor-pointer text-zinc-400 hover:text-zinc-100 hover:bg-linear-to-r from-transparent via-zinc-900 to-transparent px-8 py-1 rounded transition-all duration-200`} href={`#${menu.route}`}>
                                                {menu.label}
                                            </a>
                                        </div>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}