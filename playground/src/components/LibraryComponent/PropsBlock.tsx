import type { JSX } from "react";

interface Props {
    content: JSX.Element;
}

export default function PropsBlock(props: Props) {

    return (
        <>
            {props.content}
        </>
    )
}