// Types
interface Props {
    side: string;
    sidebarMenu: any;
}

export default function Sidebar(props: Props) {
    const side = props.side ?? "left";

    return <aside className={`${side === "left" ? "border-r left-0" : "border-l right-0"} border-zinc-800 min-w-60 p-4 fixed top-16`}>
        <nav className="flex flex-col">
            {
                props.sidebarMenu.map((menu: any) => {
                    return <a key={menu.id} className="cursor-pointer text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 px-2 py-1 rounded-md transition-all duration-200" href={`#${menu.slug}`}>{menu.label}</a>
                })
            }
        </nav>
    </aside>
}