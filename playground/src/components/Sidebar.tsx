interface Props {
    side: string;
}

export default function Sidebar({ side = "left" }: Props) {
    return <div className={`${side === "left" ? "border-r left-0" : "border-l right-0"} border-zinc-800 min-w-60 p-4 fixed top-12`}>
        <ul>
            <li>Dropdown</li>
            <li>Button</li>
        </ul>
    </div>
}