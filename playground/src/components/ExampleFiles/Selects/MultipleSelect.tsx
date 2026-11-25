// Libraries
import { SelectInput, type Option } from "@willow/ui";
import { useState } from "react";
import { type MultiValue, type SingleValue } from "react-select";

export const multipleSelectSource = `<SelectInput label="Choose a car" position="left" options={optionsTemp} value={multipleValue} 
onChange={handleChangeMultipleDropdown} isMulti />

<SelectInput label="Choose a car" position="left" options={optionsTemp} value={multipleClearableValue} 
onChange={handleChangeMultipleClearableDropdown} isMulti isClearable />
`

const optionsTemp = [
    {
        label: "Volvo",
        value: "volvo",
    },
    {
        label: "Audi",
        value: "audi",
    },
    {
        label: "Mercedes",
        value: "mercedes",
    },
    {
        label: "Renault",
        value: "renault",
    },
]

export default function MultipleSelect() {
    const [multipleValue, setMultipleValue] = useState<MultiValue<Option>>([]);
    const [multipleClearableValue, setMultipleClearableValue] = useState<MultiValue<Option>>([]);

    const handleChangeMultipleSelect = (value: MultiValue<Option> | SingleValue<Option>) => {
        setMultipleValue(value as MultiValue<Option>);
    }

    const handleChangeMultipleClearableSelect = (value: MultiValue<Option> | SingleValue<Option>) => {
        setMultipleClearableValue(value as MultiValue<Option>);
    }

    return (
        <div className="flex gap-5 items-center">
            <SelectInput label="Choose a car" position="left" options={optionsTemp} value={multipleValue} onChange={handleChangeMultipleSelect} isMulti />

            <SelectInput label="Choose a car" position="left" options={optionsTemp} value={multipleClearableValue} onChange={handleChangeMultipleClearableSelect} isMulti isClearable />
        </div>
    )
}