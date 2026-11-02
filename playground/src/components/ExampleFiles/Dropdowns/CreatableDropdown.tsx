// Libraries
import { Dropdown, type Option } from "@willow/ui";
import { useState } from "react";
import { type MultiValue, type SingleValue } from "react-select";

export const creatableDropdownSource = `<Dropdown label="Choose a car" position="left" options={optionsTemp} value={multipleValue} 
onChange={handleChangeMultipleDropdown} isCreatable isClearable />
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

export default function CretableDropdown() {
    const [multipleValue, setMultipleValue] = useState<MultiValue<Option>>([]);

    const handleChangeMultipleDropdown = (value: MultiValue<Option> | SingleValue<Option>) => {
        setMultipleValue(value as MultiValue<Option>);
    }

    return (
        <div className="flex gap-5 items-center">
            <Dropdown label="Choose a car" position="left" options={optionsTemp} value={multipleValue} onChange={handleChangeMultipleDropdown} isCreatable isClearable isMulti />
        </div>
    )
}