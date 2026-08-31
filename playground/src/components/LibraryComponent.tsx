import type { ReactNode } from "react";

interface Props {
    title: string;
    content: ReactNode;
}

export default function LibraryComponent(props: Props) {
    return <div className="rounded-lg flex flex-col gap-3">
        <div className="text-xl font-bold">{props.title}</div>
        <div>Description</div>
        <div>
            <div className="flex items-center justify-center rounded-t-lg border-x border-t border-zinc-800 p-28">
                {props.content}
            </div>
            <div className="bg-zinc-900 flex items-center justify-center rounded-b-lg border border-zinc-800 p-10">CODE</div>
        </div>
    </div>
}