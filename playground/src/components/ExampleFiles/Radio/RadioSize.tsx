// Libraries
import { Radio } from "@willow/ui";
import { useState } from "react";

export const radioSizeSource = `<Radio checked={selectedValue === "a"} value={"a"} onChange={handleChange} size="sm" />
<Radio checked={selectedValue === "b"} value={"b"} onChange={handleChange} size="md" />
<Radio checked={selectedValue === "c"} value={"c"} onChange={handleChange} size="lg" />
`

export default function RadioSize() {
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="flex gap-3">
            <Radio checked={selectedValue === "a"} value={"a"} onChange={handleChange} size="sm" />
            <Radio checked={selectedValue === "b"} value={"b"} onChange={handleChange} size="md" />
            <Radio checked={selectedValue === "c"} value={"c"} onChange={handleChange} size="lg" />
        </div>
    )
}