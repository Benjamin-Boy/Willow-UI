// Libraries
import type { JSX } from "react";

interface Props {
    title: string;
    description: string;
    component: JSX.Element;
}

export default function SectionBlock(props: Props) {
    return (
        <div>
            <div className="font-bold">{props.title}</div>
            <div className="text-sm">{props.description}</div>
            <article>{props.component}</article>
        </div>
    )
}