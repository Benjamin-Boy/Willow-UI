import type { JSX } from "react";

interface Props {
    content: JSX.Element;
}

export default function ExampleBlock(props: Props) {

    return (
        <div className="flex items-center justify-center p-14">
            {props.content}
        </div>
    )
}