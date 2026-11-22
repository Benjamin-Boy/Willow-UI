// Types
import type { JSX } from "react";
interface Props {
    children?: JSX.Element[];
    label?: string;
    layout?: string;
}
export default function SwitchGroup(props: Props) {
    const layout = props.layout ?? "vertically";

    return (
        <div className="flex flex-col gap-2">
            {props.label && <label>{props.label}</label>}
            <div className={`flex gap-2 ${layout !== "horizontally" ? "flex-col" : ""}`}>
                {props.children}
            </div>
        </div>
    )
}