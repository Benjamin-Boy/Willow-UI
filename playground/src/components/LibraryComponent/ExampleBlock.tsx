import type { JSX } from "react";

interface Props {
    content: JSX.Element;
}

export default function ExampleBlock(props: Props) {

    return (
        <div className="flex items-center justify-center rounded-t-lg border-x border-t border-zinc-800 bg-zinc-950 p-14">
            {props.content}
        </div>
    )
}