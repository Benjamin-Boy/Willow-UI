// Libraries
import type { JSX } from "react";

interface Props {
    route: string;
    title: string;
    description: string;
    component: JSX.Element;
}

export default function SectionBlock(props: Props) {
    return (
        <div className="flex flex-col gap-3" id={props.route} >
            <div className="flex flex-col gap-1 p-2">
                <div className="font-bold text-xl">{props.title}</div>
                <div className="text-sm">{props.description}</div>
            </div>
            <article className="rounded-lg border border-zinc-800">{props.component}</article>
        </div>
    )
}