// Libraries
import { SelectInput, type Option } from "@willow/ui";
import { useState } from "react";
import { type MultiValue, type SingleValue } from "react-select";

export const groupSelectSource = `<SelectInput label="Choose a car" position="left" options={optionsTemp} value={singleValue} 
onChange={handleChangeSingleSelect} />
`

const optionsTemp = [
    {
        label: "Cars",
        options: [
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
    },
    {
        label: "Fruits",
        options: [
            {
                label: "Banana",
                value: "banana",
            },
            {
                label: "Apple",
                value: "apple",
            },
            {
                label: "Cherry",
                value: "cherry",
            },
            {
                label: "Pear",
                value: "pear",
            },
        ]
    },
    {
        label: "Professions",
        options: [
            {
                label: "Teacher",
                value: "teacher",
            },
            {
                label: "Actress",
                value: "actress",
            },
            {
                label: "Lawyer",
                value: "lawyer",
            },
        ]
    },
]

export default function GroupSelect() {
    const [singleValue, setSingleValue] = useState<SingleValue<Option>>(null);

    const handleChangeSelect = (value: MultiValue<Option> | SingleValue<Option>) => {
        setSingleValue(value as SingleValue<Option>);
    }

    return (
        <div className="flex gap-5 items-center">
            <SelectInput label="Choose a car" position="left" options={optionsTemp} value={singleValue} onChange={handleChangeSelect} disabled />
        </div>
    )
}