// Libraries
import { Checkbox } from "@willow/ui";
import { useState } from "react";

export const basicCheckboxSource = `<Checkbox />
<Checkbox />
`

export default function BasicCheckbox() {
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    // checked={selectedValue === "a"} onChange={handleChange}

    return (
        <div className="flex gap-3">
            <Checkbox />
            <Checkbox disabled />
        </div>
    )
}