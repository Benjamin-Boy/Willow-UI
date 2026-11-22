// Libraries
import { Radio } from "@willow/ui";
import { useState } from "react";

export const basicRadioSource = `<Radio checked={selectedValue === "a"} value={"a"} onChange={handleChange} />
<Radio checked={selectedValue === "b"} value={"b"} onChange={handleChange} />
<Radio disabled />
`

export default function BasicRadio() {
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="flex gap-3">
            <Radio checked={selectedValue === "a"} value={"a"} onChange={handleChange} />
            <Radio checked={selectedValue === "b"} value={"b"} onChange={handleChange} />
            <Radio disabled />
        </div>
    )
}