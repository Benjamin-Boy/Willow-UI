import { computeStyles } from "../../utils/style.utils";

interface ButtonProps {
    variant: string;
    label?: string;
    color?: string;
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

export default function Button({
    variant = "contained",
    label,
    color,
    disabled = false,
    animationSpeed = "medium",
    icon: Icon,
    startIcon: StartIcon,
    endIcon: EndIcon,
    rounded,
    buttonStyle,
    loader = false,
}: ButtonProps) {
    // const disabled = props.disabled ?? false;
    // const loader = props.loader ?? false;
    // const animationSpeed = props.animationSpeed ?? "medium";
    // const baseButtonStyle = {
    //     border: "border",
    //     radius: rounded ?? "rounded-md",
    //     padding: `${variant === "icon" ? "" : variant !== "icon" && Icon ? "p-2" : "px-4 py-2"}`,
    //     cursor: `${disabled || loader ? "cursor-default" : "cursor-pointer"}`,
    //     size: `${variant === "icon" ? "" : "min-h-10 max-h-10"}`,
    // };
    // const backgroundColor = color ?? "bg-primary hover:brightness-130";
    // const textColor = color ?? "text-primary hover:brightness-130";
    // const borderColor = color ?? "border-primary hover:brightness-130";

    // const buttonStyles: Record<string, Record<string, string>> = {
    //     "contained": {
    //         backgroundColor: `${disabled || loader ? "bg-default-light" : `${backgroundColor}`}`,
    //         textColor: `${disabled || loader ? "text-default-dark" : "text-default-dark"}`,
    //         borderColor: "border-transparent",
    //     },
    //     "outlined": {
    //         backgroundColor: `bg-transparent  ${disabled || loader ? "" : "hover:bg-default-dark"}`,
    //         textColor: `${disabled || loader ? "text-default-light" : `${textColor}`}`,
    //         borderColor: `${disabled || loader ? "border-default-light" : `${borderColor}`}`,
    //     },
    //     "text": {
    //         backgroundColor: `bg-transparent  ${disabled || loader ? "" : "hover:bg-default-dark"}`,
    //         textColor: `${disabled || loader ? "text-default-light" : `${textColor}`}`,
    //         borderColor: "border-transparent",
    //     },
    //     "icon": {
    //         backgroundColor: "bg-transparent",
    //         textColor: `${textColor}`,
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
        <div className="cursor-pointer">
            <Icon className="hover:stroke-blue-600" />
        </div>
    );
}
