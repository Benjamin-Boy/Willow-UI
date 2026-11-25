// Libraries
import { ComponentType, useState } from "react";
import { IconProps } from "../Icons/Icon/IconWrapper";
import ChevronRight from "../Icons/ChevronRight";

// Types
interface Props {
    options: DropdownOption[];
    placeholder?: string;
    label: string;
    icon?: ComponentType<IconProps>;
}

interface DropdownOption {
    label?: string;
    options: {
        label: string;
        iconLeft?: ComponentType<IconProps>;
        iconRight?: ComponentType<IconProps>;
        disabled?: boolean;
        options?: {
            label: string;
            icon?: ComponentType<IconProps>;
            disabled?: boolean;
            action?: () => void;
        }[];
        action?: () => void;
    }[];
}

export default function Dropdown(props: Props) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleOpenDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    // click outside

    return (
        <button onClick={handleOpenDropdown} className="relative flex items-center justify-between border border-input-border px-2 rounded bg-input-bg hover:bg-input-bg-lighter">
            <div className="flex items-center gap-1 p-1">
                {props.icon && <props.icon size={16} />}
                {props.label}
            </div>

            {
                showDropdown &&
                (
                    <div className="absolute top-10 left-0 bg-input-bg border border-input-border rounded min-w-32">
                        {
                            props.options.map((option) => {
                                return (
                                    <div className="flex flex-col gap-2 w-full not-last:border-b border-input-border p-1">
                                        {option.label && <p className="flex justify-start text-xs text-zinc-400">{option.label}</p>}
                                        <div className="flex flex-col">
                                            {
                                                option.options.map((opt) => {
                                                    return (
                                                        <div className={`group relative text-sm flex items-center justify-between ${opt.disabled ? "text-zinc-400" : "text-input-text hover:bg-zinc-700"} w-full rounded`} {...(opt.disabled ? {} : { onClick: opt.action })} >

                                                            <div className="flex items-center w-full gap-1">
                                                                {opt.iconLeft && <opt.iconLeft size={16} />}
                                                                <div className="flex items-center justify-between grow gap-1 p-1">
                                                                    {opt.label}
                                                                    {opt.iconRight && <opt.iconRight size={16} />}
                                                                </div>
                                                            </div>


                                                            {opt.options && <div>{<ChevronRight size={22} />}</div>}

                                                            {opt.options && (
                                                                <div className="absolute scale-0 group-hover:flex group-hover:scale-100 left-29 top-0 hidden flex-col items-start gap-2 bg-input-bg border border-input-border rounded p-1 ">
                                                                    {opt.options.map((op) => {
                                                                        return (
                                                                            <div className="top-0 text-sm flex justify-start text-input-text w-full rounded hover:bg-zinc-700 p-1" onClick={opt.action}>
                                                                                {op.label}
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            )}

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </button>
    )
}