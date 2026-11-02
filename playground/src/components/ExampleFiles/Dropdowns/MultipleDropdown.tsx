// Libraries
import { Dropdown, type Option } from "@willow/ui";
import { useState } from "react";
import { type MultiValue, type SingleValue } from "react-select";

export const multipleDropdownSource = `<Dropdown label="Choose a car" position="left" options={optionsTemp} value={multipleValue} 
onChange={handleChangeMultipleDropdown} isMulti />

<Dropdown label="Choose a car" position="left" options={optionsTemp} value={multipleClearableValue} 
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

export default function MultipleDropdown() {
    const [multipleValue, setMultipleValue] = useState<MultiValue<Option>>([]);
    const [multipleClearableValue, setMultipleClearableValue] = useState<MultiValue<Option>>([]);

    const handleChangeMultipleDropdown = (value: MultiValue<Option> | SingleValue<Option>) => {
        setMultipleValue(value as MultiValue<Option>);
    }

    const handleChangeMultipleClearableDropdown = (value: MultiValue<Option> | SingleValue<Option>) => {
        setMultipleClearableValue(value as MultiValue<Option>);
    }

    return (
        <div className="flex gap-5 items-center">
            <Dropdown label="Choose a car" position="left" options={optionsTemp} value={multipleValue} onChange={handleChangeMultipleDropdown} isMulti />

            <Dropdown label="Choose a car" position="left" options={optionsTemp} value={multipleClearableValue} onChange={handleChangeMultipleClearableDropdown} isMulti isClearable />
        </div>
    )
}