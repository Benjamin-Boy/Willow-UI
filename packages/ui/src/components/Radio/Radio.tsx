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
    // color?: string;
    // borderColor?: string;
    // unCheckedColor?: string;
}
export default function Radio(props: Props) {
    const size = props.size ?? "md";
    const disabled = props.disabled ?? false;

    const baseRadioStyle = {
        border: "border",
        radius: "rounded-full",
        display: "flex items-center justify-center",
        after: `after:content-['']
                after:rounded-full
                after:scale-0
                after:transition-transform
                peer-checked:after:scale-100`,
        borderSize: "border-2",
        cursor: `${disabled ? "cursor-default" : "cursor-pointer"}`,
    };

    const sizeStyle = {
        size: `${size === "sm" ? "size-4" : size === "md" ? "size-6" : "size-8"}`,
        afterSize: "after:size-3",
    };

    const colorStyle = {
        borderUnchecked: `${disabled ? "border-zinc-700" : "border-zinc-400"}`,
        borderChecked: "peer-checked:border-primary",
        dot: "after:bg-primary",
    };

    return (
        <label className="flex items-center gap-3 cursor-pointer">
            <input
                checked={props.checked}
                value={props.value}
                onChange={props.onChange}
                type="radio"
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