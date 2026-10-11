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
        <aside className={`${side === "left" ? "border-r left-0" : "border-l right-0"} border-zinc-800 min-w-60 p-8 fixed`}>
            <nav>
                <ul>
                    {
                        props.menu?.map((menu: any) => {
                            return <li>
                                {type === "route" ? <NavLink key={menu.id} to={{
                                    pathname: menu.route,
                                }} className="active:bg-red-600 cursor-pointer text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 px-2 py-1 rounded-md transition-all duration-200" >{menu.label}

                                </NavLink>
                                    :
                                    <a key={menu.id} className="active:bg-red-600 cursor-pointer text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 px-2 py-1 rounded-md transition-all duration-200" href={`#${menu.route}`}>{menu.label}</a>}
                            </li>
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}