type IconVariant = "stroke" | "fill";

export type IconProps = React.SVGProps<SVGSVGElement> & {
    variant?: IconVariant;
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
};

export default function IconWrapper(props: IconProps) {
    const variant = props.variant ?? "stroke";
    const size = props.size ?? 24;
    const cursor = props.className?.split(" ").find((string) => string.includes("cursor")) ?? "cursor-default";
    const strokeWidth = variant === "stroke" ?
        props.strokeWidth
        ?? "stroke-1"
        : "";
    const strokeColor = variant === "stroke" ?
        props.className?.split(" ").find((string) => string.includes("stroke") && !string.includes("hover:"))
        ?? "stroke-white"
        : "stroke-white";
    const hoverStrokeColor = variant === "stroke" ?
        props.className?.split(" ").find((string) => string.includes("hover:stroke"))
        ?? ""
        : "hover:stroke-none";
    const fillColor = variant === "fill" ?
        props.className?.split(" ").find((string) => string.includes("fill") && !string.includes("hover:"))
        ?? "fill-white"
        : "fill-none";
    const hoverFillColor = variant === "fill" ?
        props.className?.split(" ").find((string) => string.includes("hover:fill"))
        ?? "hover:fill-primary"
        : "hover:fill-none";

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className={`${strokeWidth} ${strokeColor} ${fillColor} ${hoverStrokeColor} ${hoverFillColor} ${cursor} transition-all duration-200`}
        >
            {props.children}
        </svg>
    );
}