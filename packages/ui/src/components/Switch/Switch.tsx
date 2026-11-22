import { computeStyles } from "../../utils"

// Types
interface Props {
    checked?: boolean;
    onChange?: () => void;
    label?: string;
    labelDouble?: string;
    square?: boolean;
    disabled?: boolean;
    position?: string;
    double?: boolean;
}
export default function Switch(props: Props) {
    const checked = props.checked ?? false;
    const square = props.square ?? false;
    const disabled = props.disabled ?? false;
    const position = props.position ?? "right";
    const double = props.double ?? false;

    //TODO
    //  - Ajouter le groupe de toggle
    //  - Ajouter message erreur
    //  - Ajouter possibilité de cliquer sur le switch Et sur le label
    //  - Ajouter double label

    const toggleStyle = {
        position: "relative",
        display: "inline-block",
        width: "w-10",
        height: "h-6",
        appearance: "appearance-none",
        cursor: "cursor-pointer",
    }

    const beforeStyle = {
        position: "before:absolute before:left-0 before:top-0",
        display: "before:inline-block",
        size: "before:h-full before:w-full",
        borderRadius: `${square ? "before:rounded" : "before:rounded-full"}`,
        backgroundColor: `${disabled ? "before:bg-zinc-300" : "before:bg-zinc-100"}`,
        animation: "before:transition-colors before:duration-200 before:ease-in",
        checked: "checked:before:bg-zinc-800",
    }

    const afterStyle = {
        position: "after:absolute after:left-0.5 after:top-2/4",
        display: "before:inline-block",
        size: "after:h-5 after:w-5",
        borderRadius: `${square ? "after:rounded" : "after:rounded-full"}`,
        backgroundColor: `${disabled ? "after:bg-zinc-600" : "after:bg-primary"}`,
        transform: "after:-translate-y-2/4",
        animation: "after:transition-transform after:duration-200 after:ease-in",
        checked: "checked:after:translate-x-[calc(100%-4px)]",
    }

    return (
        <div className={`flex ${position === "top" || position === "bottom" ? "flex-col" : ""} items-center justify-center gap-3`}>
            {
                (!double && props.label && (position === "left" || position === "top") ||
                    ((double && props.label && !props.position))) &&
                <label htmlFor={props.label} className="whitespace-nowrap">{props.label}</label>
            }

            <input type="checkbox" checked={checked} onChange={props.onChange} className={`${computeStyles(toggleStyle)} ${computeStyles(beforeStyle)} ${computeStyles(afterStyle)}`} disabled={disabled} />

            {
                (!double && props.label && (position === "right" || position === "bottom") ||
                    ((double && props.labelDouble && !props.position))) &&
                <label htmlFor={double ? props.labelDouble : props.label} className="whitespace-nowrap">{double ? props.labelDouble : props.label}</label>
            }
        </div>
    )
}