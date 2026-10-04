import type { JSX } from "react";

interface Props {
    content: JSX.Element;
}

export default function ExampleBlock(props: Props) {

    return (
        <div className="flex items-center justify-center rounded-t-lg border-x border-t border-zinc-800 p-28 min-h-80">
            {props.content}
        </div>
    )
}