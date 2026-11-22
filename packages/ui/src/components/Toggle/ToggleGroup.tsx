// Utils
import { computeStyles } from "../../utils";

// Types
import { JSX } from "react";
interface Props {
    children?: JSX.Element[];
    value: string;
    onChange: (value: string) => void;
    exclusive?: boolean;
    vertically?: boolean;
}
export default function ToggleGroup(props: Props) {
    //TODO Ajouter la possibilité de choisir plusieurs options
    const exclusive = props.exclusive ?? true;
    const vertically = props.vertically ?? false;

    const baseStyle = {
        display: `flex ${vertically ? "flex-col" : ""} items-center justify-center`,
        rounded: "first:rounded last:rounded",
    }

    const handleToggleValue = (event: React.MouseEvent<HTMLElement>) => {
        props.onChange(event.currentTarget.id)
    };

    return (
        <div className={`${computeStyles(baseStyle)}`} >
            {props.children?.map((c) => {

                return {
                    ...c,
                    props: {
                        ...c.props,
                        rounded: `${vertically ? "first:rounded-t last:rounded-b" : "first:rounded-l last:rounded-r"}`,
                        border: `${vertically ? "first:border border-x last:border" : "first:border border-y last:border"}`,
                        checked: c.props.value === props.value,
                        onClick: handleToggleValue
                    }
                }
            })}
        </div>
    )
}