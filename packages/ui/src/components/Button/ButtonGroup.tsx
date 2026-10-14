import type { JSX } from "react";
import { computeStyles } from "../../utils/style.utils";
import type { IconProps } from "../Icons/Icon/Icon";

interface ButtonProps {
    children?: React.ReactNode;
    border?: string;
}

export default function Button(props: ButtonProps) {
    const border = props.border ?? "";
    // const disabled = props.disabled ?? false;
    // const animationSpeed = props.animationSpeed ?? "medium";

    // const baseButtonStyle = {
    //     border: "border",
    //     radius: "rounded-md",
    //     padding: "px-4 py-2",
    //     cursor: `${disabled ? "cursor-default" : "cursor-pointer"}`,
    // }

    // const buttonStyles: Record<string, Record<string, string>> = {
    //     "contained": {
    //         backgroundColor: `${disabled ? "bg-zinc-300" : "bg-blue-600 hover:bg-blue-700"}`,
    //         textColor: `${disabled ? "text-zinc-300" : "text-white"}`,
    //         borderColor: "border-transparent",
    //     },
    //     "outlined": {
    //         backgroundColor: "bg-transparent hover:bg-zinc-900",
    //         textColor: "text-blue-600 hover:text-blue-400",
    //         borderColor: "border-blue-600 hover:border-blue-400",
    //     },
    //     "text": {
    //         backgroundColor: "bg-transparent hover:bg-slate-900",
    //         textColor: "text-blue-600 hover:text-blue-400",
    //         borderColor: "border-transparent",
    //     },
    //     "icon": {
    //         backgroundColor: "bg-transparent",
    //         textColor: "text-blue-600 hover:text-blue-400",
    //         borderColor: "border-transparent",
    //     },
    // }

    // const animationSpeeds: Record<string, string> = {
    //     slow: "transition-all duration-500",
    //     medium: "transition-all duration-300",
    //     fast: "transition-all duration-150",
    // }

    // const defaultStyle = computeStyles(buttonStyles["contained"]);

    return (
        <div className={`flex items-center first:rounded last:rounded ${border}`}>
            {props.children}
        </div>
    );
}
