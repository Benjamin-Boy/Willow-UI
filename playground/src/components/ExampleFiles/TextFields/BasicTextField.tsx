import { TextField } from "@willow/ui";
import { useState, type ChangeEvent } from "react";

export const basicTextFieldSource = `<TextField type={"text"} value={value} onChange={handleChangeValue} />`

export default function BasicTextField() {
    const [value, setValue] = useState("");

    const handleChangeValue = (e: ChangeEvent) => {
        setValue(e.target.value);
    }

    console.log("value", value)

    return (
        <TextField type={"text"} value={value} onChange={handleChangeValue} />
    )
}