// Utils
import { computeStyles } from "../../utils";

// Types
import { JSX } from "react";
interface Props {
    value: string;
    children?: JSX.Element;
    size?: string;
    rounded?: string;
    border?: string;
    checked?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}
export default function Toggle(props: Props) {
    const checked = props.checked ?? false;
    const size = props.size ?? "sm";
    const rounded = props.rounded ?? "rounded";
    const border = props.border ?? "border";
    const disabled = props.disabled ?? false;

    const baseStyle = {
        cursor: "cursor-pointer",
        borderRadius: `${rounded}`,
        border: `${border}`,
        select: `${disabled ? "pointer-events-none" : ""}`,
        display: "flex items-center justify-center",
        transition: "transition-all duration-200",
    }

    const colorStyle = {
        backgroundColor: `${checked ? "bg-primary" : disabled ? "bg-zinc-800" : "bg-zinc-950"}`,
        borderColor: "border-zinc-600",
        hoverColor: `${disabled || checked ? "" : "hover:bg-zinc-900"}`,
    }

    const sizeStyle = {
        size: `${size === "sm" ? "p-2" : size === "md" ? "p-3" : "p-4"}`,
    }

    return (
        <div id={props.value} className={`${computeStyles(baseStyle)} ${computeStyles(colorStyle)} ${computeStyles(sizeStyle)}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
}