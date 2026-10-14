import { computeStyles } from "../../utils/style.utils";

interface ButtonProps {
    variant: string;
    label?: string;
    disabled?: boolean;
    animationSpeed?: string;
    icon?: React.ReactNode;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    rounded?: string;
    buttonStyle?: Record<string, Record<string, string>>;
    loader?: React.ReactNode;
}

//TODO
// - variant avec styles presets
// - Changer les presets en fonction du theme

//  - icone seule
//  - tooltip
//  - long click

export default function Button(props: ButtonProps) {
    const disabled = props.disabled ?? false;
    const animationSpeed = props.animationSpeed ?? "medium";
    const baseButtonStyle = {
        border: "border",
        radius: props.rounded ?? "rounded-md",
        padding: "px-4 py-2",
        cursor: `${disabled ? "cursor-default" : "cursor-pointer"}`,
        size: "min-h-10 max-h-10",
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
        "icon": {
            backgroundColor: "bg-transparent",
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
        <button className={`${buttonStyles[props.variant] ? `${computeStyles(baseButtonStyle)} ${computeStyles(buttonStyles[props.variant])}` : defaultStyle} ${animationSpeeds[animationSpeed]} flex items-center gap-3 text-md`}>
            {props.loader && props.loader}
            {props.icon && props.icon}
            {
                !props.icon &&
                (
                    <>
                        {props.startIcon && props.startIcon}
                        {props.label && props.label}
                        {props.endIcon && props.endIcon}
                    </>
                )
            }
        </button>
    );
}
