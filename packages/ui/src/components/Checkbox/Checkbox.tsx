import { ChangeEvent } from "react";
import { computeStyles } from "../../utils/style.utils";

// Types
interface Props {
    checked?: boolean;
    value?: string;
    onChange?: (value: ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
    label?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
}
export default function Checkbox(props: Props) {
    const size = props.size ?? "md";
    const disabled = props.disabled ?? false;

    const baseRadioStyle = {
        border: "border",
        radius: "rounded",
        display: "flex items-center justify-center",
        after: `after:content-["✓"]
                after:flex
                after:items-center
                after:justify-center
                after:scale-0
                after:transition-transform
                peer-checked:after:scale-100`,
        borderSize: "border-2",
        cursor: `${disabled ? "cursor-default" : "cursor-pointer"}`,
    };

    const sizeStyle = {
        size: `${size === "sm" ? "size-4" : size === "md" ? "size-6" : "size-8"}`,
        afterSize: `${size === "sm" ? "after:size-4" : size === "md" ? "after:size-6" : "after:size-8"}`,
    };

    const colorStyle = {
        borderUnchecked: `${disabled ? "border-zinc-700" : "border-zinc-400"}`,
        borderChecked: "peer-checked:border-primary",
        checked: "after:bg-primary after:text-white",
    };

    return (
        <label className="flex items-center gap-3 cursor-pointer">
            <input
                checked={props.checked}
                value={props.value}
                onChange={props.onChange}
                type="checkbox"
                name="choice"
                className="peer sr-only"
                disabled={disabled}
            />

            <span
                className={`
                    ${computeStyles(baseRadioStyle)}
                    ${computeStyles(sizeStyle)}
                    ${computeStyles(colorStyle)}
                `}
                aria-label="radio"
            />

            {props.label && <span className="text-zinc-700">{props.label}</span>}
        </label>
    )
}