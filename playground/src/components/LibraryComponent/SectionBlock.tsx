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
            <div className="font-bold">{props.title}</div>
            <div className="text-sm">{props.description}</div>
            <article>{props.component}</article>
        </div>
    )
}