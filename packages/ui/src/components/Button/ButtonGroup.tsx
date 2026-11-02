interface ButtonProps {
    children?: React.ReactNode;
    border?: string;
    gap?: string;
}

export default function Button(props: ButtonProps) {
    const border = props.border ?? "";
    const gap = props.gap ?? "";

    return (
        <div className={`flex items-center first:rounded last:rounded ${gap} ${border}`}>
            {props.children}
        </div>
    );
}
