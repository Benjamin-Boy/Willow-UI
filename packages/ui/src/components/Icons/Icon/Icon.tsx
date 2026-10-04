type IconVariant = "stroke" | "fill";

export type IconProps = React.SVGProps<SVGSVGElement> & {
    variant?: IconVariant;
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    children?: React.ReactNode;
};

export default function Icon(props: IconProps) {
    const variant = props.variant ?? "stroke";
    const size = props.size ?? 24;
    const color = props.color ?? "#fff";
    const strokeWidth = props.strokeWidth ?? 1;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={variant === "fill" ? color : "none"}
            stroke={variant === "stroke" ? color : "none"}
            strokeWidth={variant === "stroke" ? strokeWidth : undefined}
            {...props}
        >
            {props.children}
        </svg>
    );
}