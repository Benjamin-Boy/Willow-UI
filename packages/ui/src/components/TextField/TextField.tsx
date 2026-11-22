import { ChangeEvent, useState } from "react";
import { computeStyles } from "../../utils";

interface Props {
    type: string;
    value: string;
    onChange: (value: string) => void;
    variant?: string;
    placeholder?: string;
    disabled?: boolean;
}
export default function TextField(props: Props) {
    const variant = props.variant ?? "standard";
    const placeholder = props.placeholder ?? "Placeholder";
    const disabled = props.disabled ?? false;

    const [value, setValue] = useState(props.value);

    const handleChangeValue = (e: ChangeEvent) => {
        setValue(e.target.value)
    }

    const baseStyle = {
        backgroundColor: `${variant === "standard" ? "" : "bg-zinc-800 focus:bg-zinc-700"}`,
        borderRadius: "rounded-sm",
        border: `${variant === "standard" ? "border border-transparent focus:border-primary" : "border border-zinc-700"}`,
        padding: "p-2",
        outline: "outline-none",
        cursor: `${disabled ? "cursor-default" : "cursor-auto"}`
    }

    return (
        <label className="relative">
            <input type="text" value={value} onChange={handleChangeValue} onBlur={props.onChange} className={`peer transition-all duration-200 ${computeStyles(baseStyle)}`} />
            <div className={`absolute ${value === "" ? "top-2" : "-top-2 text-xs"} left-2 flex items-start pointer-events-none transition-all duration-100 ${value === "" ? "peer-focus:-top-2 peer-focus:text-xs" : ""}`}>{placeholder}</div>
        </label>
    )
}