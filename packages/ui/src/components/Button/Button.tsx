import type { JSX } from "react";
import { computeStyles } from "../../utils/style.utils";
import type { IconProps } from "../Icons/Icon/Icon";

interface ButtonProps {
    label: string;
    variant: string;
    disabled?: boolean;
    animationSpeed?: string;
    icon?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

//TODO
// - variant avec styles presets
// - Changer les presets en fonction du theme

//  - icon / sans icone
//  - icone droite/gauche
//  - icone seule
//  - tooltip
//  - Single tap
//  - long click

export default function Button(props: ButtonProps) {
    const disabled = props.disabled ?? false;
    const animationSpeed = props.animationSpeed ?? "medium";

    const baseButtonStyle = {
        border: "border",
        radius: "rounded-md",
        padding: "px-4 py-2",
        cursor: `${disabled ? "cursor-default" : "cursor-pointer"}`,
    }

    const buttonStyles: Record<string, Record<string, string>> = {
        "contained": {
            backgroundColor: `${disabled ? "bg-zinc-300" : "bg-blue-600 hover:bg-blue-700"}`,
            textColor: `${disabled ? "text-zinc-300" : "text-white"}`,
            borderColor: "border-transparent",
        },
        "outlined": {
            backgroundColor: "bg-transparent hover:bg-zinc-900",
            textColor: "text-blue-600 hover:text-blue-400",
            borderColor: "border-blue-600 hover:border-blue-400",
        },
        "text": {
            backgroundColor: "bg-transparent hover:bg-slate-900",
            textColor: "text-blue-600 hover:text-blue-400",
            borderColor: "border-transparent",
        },
    }

    const animationSpeeds: Record<string, string> = {
        slow: "transition-all duration-500",
        medium: "transition-all duration-300",
        fast: "transition-all duration-150",
    }

    const defaultStyle = computeStyles(buttonStyles["contained"]);

    return (
        <button className={`${buttonStyles[props.variant] ? ` ${computeStyles(baseButtonStyle)} ${computeStyles(buttonStyles[props.variant])}` : defaultStyle} ${animationSpeeds[animationSpeed]} flex items-center gap-3 text-md`}>
            {props.icon && props.icon}
            {
                !props.icon &&
                (
                    <>
                        {props.startIcon && props.startIcon}
                        {props.label}
                        {props.endIcon && props.endIcon}
                    </>
                )
            }
        </button>
    );
}
