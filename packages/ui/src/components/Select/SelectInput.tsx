// Libraries
import Select, { components, CSSObjectWithLabel, GroupHeadingProps, GroupProps, type MultiValue, type SingleValue } from "react-select";
import Creatable from 'react-select/creatable';

// Types
interface Props {
    options: Option[] | GroupedOption[];
    onChange: (value: MultiValue<Option> | SingleValue<Option>) => void,
    value: Option | Option[] | null;
    label?: string;
    position?: string;
    disabled?: boolean;
    isMulti?: boolean;
    isClearable?: boolean;
    isCreatable?: boolean;
}

export interface Option {
    label: string;
    value: string | number;
}

export interface GroupedOption {
    readonly label: string;
    readonly options: readonly Option[];
}

//TODO
//  - Ajouter une multi sélection par checkbox
//  - Disabled

const GroupHeading = (
    props: GroupHeadingProps<Option | GroupedOption>
) => {
    return (
        <div className="not-last:border-b not-last:border-input-border text-input-border text-sm p-2">
            <components.GroupHeading {...props} />
        </div>
    );
}

export default function SelectInput(props: Props) {
    const position = props.position ?? "left";
    const disabled = props.disabled ?? false;
    const isMulti = props.isMulti ?? false;
    const isClearable = props.isClearable ?? false;
    const isCreatable = props.isCreatable ?? false;

    const styles = {
        clearIndicator: (baseStyles: CSSObjectWithLabel, state) => ({
            ...baseStyles,
            padding: "0.2rem",
            cursor: "pointer",
            height: "100%",
            display: "flex",
            alignItems: "center",
        }),
        container: (baseStyles: CSSObjectWithLabel, state) => ({
            ...baseStyles,
            borderWidth: "0.1rem",
            borderColor: "var(--color-input-border)",
            borderRadius: "var(--radius-md)",
        }),
        control: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            backgroundColor: "var(--color-input-bg)",
            padding: "0.2rem 0.8rem 0.2rem 0.8rem",
            borderRadius: "var(--radius-md)",
        }),
        dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            padding: "0.2rem",
            cursor: "pointer",
            height: "100%",
            display: "flex",
            alignItems: "center",
        }),
        group: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        groupHeading: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        menuPortal: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        indicatorsContainer: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        indicatorSeparator: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        input: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        loadingIndicator: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        loadingMessage: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        menu: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        menuList: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            backgroundColor: "var(--color-input-bg)",
            color: "var(--color-input-text)",
            borderWidth: "0.1rem",
            borderColor: "var(--color-input-border)",
            borderRadius: "var(--radius-md)",
            display: "flex",
            flexDirection: "column",
            gap: "0.3rem",
            marginTop: "0.5rem",
        }),
        multiValue: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        multiValueLabel: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            padding: "0.1rem 0.4rem 0.1rem 0.4rem",
            borderWidth: "0.1rem",
            borderColor: "var(--color-input-border)",
            borderRadius: "var(--radius-sm) 0 0 var(--radius-sm)",
        }),
        multiValueRemove: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            padding: "0.1rem 0.4rem 0.1rem 0.4rem",
            borderWidth: "0.1rem 0.1rem 0.1rem 0",
            borderColor: "var(--color-input-border)",
            borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "var(--color-primary)",
            },
        }),
        noOptionsMessage: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        option: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
            padding: "0.3rem 1rem 0.3rem 1rem",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "var(--color-primary)",
            }
        }),
        placeholder: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        singleValue: (baseStyles: CSSObjectWithLabel) => ({
            ...baseStyles,
        }),
        valueContainer: (baseStyles: CSSObjectWithLabel) => ({
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
                    components={{ GroupHeading }}
                    isDisabled={disabled}

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