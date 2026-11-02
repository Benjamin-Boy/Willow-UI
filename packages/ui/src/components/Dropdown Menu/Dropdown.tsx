// Libraries
import Select, { type MultiValue, type SingleValue } from "react-select";
import Creatable, { useCreatable } from 'react-select/creatable';

// Types
interface Props {
    options: Option[];
    onChange: (value: MultiValue<Option> | SingleValue<Option>) => void,
    value: Option | Option[] | null;
    label?: string;
    position?: string;
    isMulti?: boolean;
    isClearable?: boolean;
    isCreatable?: boolean;
}

export interface Option {
    label: string;
    value: string | number;
}

export default function Dropdown(props: Props) {
    const position = props.position ?? "left";
    const isMulti = props.isMulti ?? false;
    const isClearable = props.isClearable ?? false;
    const isCreatable = props.isCreatable ?? false;

    const styles = {
        clearIndicator: (baseStyles, state) => ({
            ...baseStyles,
            padding: "0.2rem",
            cursor: "pointer",
            height: "100%",
            display: "flex",
            alignItems: "center",
        }),
        container: (baseStyles, state) => ({
            ...baseStyles,
            borderWidth: "0.1rem",
            borderColor: "var(--color-input-text)",
            borderRadius: "var(--radius-md)",
        }),
        control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--color-input-bg)",
            padding: "0.2rem 0.8rem 0.2rem 0.8rem",
            borderRadius: "var(--radius-md)",
        }),
        dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            padding: "0.2rem",
            cursor: "pointer",
            height: "100%",
            display: "flex",
            alignItems: "center",
        }),
        group: (baseStyles) => ({
            ...baseStyles,
        }),
        groupHeading: (baseStyles) => ({
            ...baseStyles,
        }),
        menuPortal: (baseStyles) => ({
            ...baseStyles,
        }),
        indicatorsContainer: (baseStyles) => ({
            ...baseStyles,
        }),
        indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
        }),
        input: (baseStyles) => ({
            ...baseStyles,
        }),
        loadingIndicator: (baseStyles) => ({
            ...baseStyles,
        }),
        loadingMessage: (baseStyles) => ({
            ...baseStyles,
        }),
        menu: (baseStyles) => ({
            ...baseStyles,
        }),
        menuList: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "var(--color-input-bg)",
            color: "var(--color-input-text)",
            borderWidth: "0.1rem",
            borderColor: "var(--color-input-text)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            marginTop: "0.5rem",
        }),
        multiValue: (baseStyles) => ({
            ...baseStyles,
        }),
        multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            padding: "0.1rem 0.4rem 0.1rem 0.4rem",
            borderWidth: "0.1rem",
            borderColor: "var(--input-text)",
            borderRadius: "var(--radius-sm) 0 0 var(--radius-sm)",
        }),
        multiValueRemove: (baseStyles) => ({
            ...baseStyles,
            padding: "0.1rem 0.4rem 0.1rem 0.4rem",
            borderWidth: "0.1rem 0.1rem 0.1rem 0",
            borderColor: "var(--input-text)",
            borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "var(--color-primary)",
            },
        }),
        noOptionsMessage: (baseStyles) => ({
            ...baseStyles,
        }),
        option: (baseStyles) => ({
            ...baseStyles,
            padding: "0.3rem 1rem 0.3rem 1rem",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "var(--color-primary)",
            }
        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
        }),
        valueContainer: (baseStyles) => ({
            ...baseStyles,
            padding: "0.3rem",
            display: "flex",
            gap: "0.5rem",
        }),
    }

    return (
        <div className={`flex ${position === "top" || position === "bottom" ? "flex-col" : ""} items-center gap-3`}>
            {
                props.label && position === "left" || position === "top" && <label htmlFor="cars">Choose a car</label>
            }

            {!isCreatable &&
                <Select
                    options={props.options}
                    value={props.value}
                    onChange={props.onChange}
                    isMulti={isMulti}
                    isClearable={isClearable}
                    noOptionsMessage={() => "Aucune option"}
                    closeMenuOnSelect={!isMulti}

                    unstyled
                    styles={styles}
                />
            }

            {isCreatable &&
                <Creatable
                    options={props.options}
                    value={props.value}
                    onChange={props.onChange}
                    isMulti={isMulti}
                    isClearable={isClearable}
                    noOptionsMessage={() => "Aucune option"}
                    closeMenuOnSelect={!isMulti}

                    unstyled
                    styles={styles}
                />
            }

            {
                props.label && position === "right" || position === "bottom" && <label htmlFor="cars">Choose a car</label>
            }
        </div>
    )
}