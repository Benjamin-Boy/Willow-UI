import { ComponentType } from "react";
import { computeStyles } from "../../utils/style.utils";
import { IconProps } from "../Icons/Icon/IconWrapper";

interface ButtonProps {
    variant?: string;
    label?: string;
    color?: string;
    disabled?: boolean;
    animationSpeed?: string;
    icon?: ComponentType<IconProps>;
    iconVariant?: string;
    startIcon?: ComponentType<IconProps>;
    endIcon?: ComponentType<IconProps>;
    rounded?: string;
    buttonStyle?: Record<string, Record<string, string>>;
    loader?: React.ReactNode;
    iconClassName?: string;
}

//TODO
// - variant avec styles presets
// - Changer les presets en fonction du theme

//  - icone seule
//  - tooltip
//  - long click
//  - onClick function

export default function Button(props: ButtonProps) {
    const variant = props.variant ?? "contained";
    const disabled = props.disabled ?? false;
    const loader = props.loader ?? false;
    const animationSpeed = props.animationSpeed ?? "medium";
    const iconVariant = props.iconVariant ?? "stroke";
    const baseButtonStyle = {
        border: "border",
        radius: props.rounded ?? "rounded-md",
        padding: `${variant === "icon" ? "" : variant !== "icon" && props.icon ? "p-2" : "px-4 py-2"}`,
        cursor: `${disabled || loader ? "cursor-default" : "cursor-pointer"}`,
        size: `${variant === "icon" ? "" : "min-h-10 max-h-10"}`,
    };
    const backgroundColor = props.color ?? "bg-primary hover:brightness-130";
    const textColor = props.color ?? "text-primary hover:brightness-130";
    const borderColor = props.color ?? "border-primary hover:brightness-130";

    const buttonStyles: Record<string, Record<string, string>> = {
        "contained": {
            backgroundColor: `${disabled || loader ? "bg-default-light" : `${backgroundColor}`}`,
            textColor: `${disabled || loader ? "text-default-dark" : "text-default-dark"}`,
            borderColor: "border-transparent",
        },
        "outlined": {
            backgroundColor: `bg-transparent  ${disabled || loader ? "" : "hover:bg-default-dark"}`,
            textColor: `${disabled || loader ? "text-default-light" : `${textColor}`}`,
            borderColor: `${disabled || loader ? "border-default-light" : `${borderColor}`}`,
        },
        "text": {
            backgroundColor: `bg-transparent  ${disabled || loader ? "" : "hover:bg-default-dark"}`,
            textColor: `${disabled || loader ? "text-default-light" : `${textColor}`}`,
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
        variant === "icon" ?
            (
                <>
                    {props.icon && <props.icon className={`${props.iconClassName} ${baseButtonStyle.cursor}`} variant={iconVariant} />}
                </>
            )
            :
            (
                <button className={`${buttonStyles[variant] ? `${computeStyles(baseButtonStyle)} ${computeStyles(buttonStyles[variant])}` : defaultStyle} ${animationSpeeds[animationSpeed]} flex items-center gap-3 text-md`}>
                    {props.loader && props.loader}
                    {props.icon && <props.icon className={`${props.iconClassName} ${baseButtonStyle.cursor}`} />}
                    {
                        !props.icon &&
                        (
                            <>
                                {props.startIcon && <props.startIcon className={`${props.iconClassName} ${baseButtonStyle.cursor}`} />}
                                {props.label && props.label}
                                {props.endIcon && <props.endIcon className={`${props.iconClassName} ${baseButtonStyle.cursor}`} />}
                            </>
                        )
                    }
                </button>
            )
    );
}
