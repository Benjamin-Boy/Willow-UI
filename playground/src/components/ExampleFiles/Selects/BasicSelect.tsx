// Libraries
import { SelectInput, type Option } from "@willow/ui";
import { useState } from "react";
import { type MultiValue, type SingleValue } from "react-select";

export const basicSelectSource = `<SelectInput label="Choose a car" position="left" options={optionsTemp} value={singleValue} 
onChange={handleChangeSingleDropdown} />

<SelectInput label="Choose a car" position="left" options={optionsTemp} value={multipleValue} 
onChange={handleChangeMultipleDropdown} isClearable />
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

export default function BasicSelect() {
    const [singleValue, setSingleValue] = useState<SingleValue<Option>>(null);
    const [multipleValue, setMultipleValue] = useState<MultiValue<Option>>([]);

    const handleChangeSingleSelect = (value: MultiValue<Option> | SingleValue<Option>) => {
        setSingleValue(value as SingleValue<Option>);
    }

    const handleChangeMultipleSelect = (value: MultiValue<Option> | SingleValue<Option>) => {
        setMultipleValue(value as MultiValue<Option>);
    }

    return (
        <div className="flex gap-5 items-center">
            <SelectInput label="Choose a car" position="left" options={optionsTemp} value={singleValue} onChange={handleChangeSingleSelect} />

            <SelectInput label="Choose a car" position="left" options={optionsTemp} value={multipleValue} onChange={handleChangeMultipleSelect} isClearable />
        </div>
    )
}