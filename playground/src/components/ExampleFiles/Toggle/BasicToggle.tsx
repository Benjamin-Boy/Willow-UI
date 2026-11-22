// Libraries
import { Toggle, TrashStroke } from "@willow/ui";
import { useState } from "react";

export const basicToggleSource = `<Switch checked={selectedValueFirstSwitch} onChange={handleChangeFirstSwitch} />
<Switch checked={selectedValueSecondSwitch} onChange={handleChangeSecondSwitch} square />
<Switch disabled />
<Switch checked disabled />
`

export default function BasicToggle() {
    const [toggleChecked, setToggleChecked] = useState(false);

    const handleCheckToggle = () => {
        setToggleChecked(!toggleChecked);
    }

    return (
        <Toggle size="lg" checked={toggleChecked} onClick={handleCheckToggle} >
            <TrashStroke className="cursor-pointer" />
        </Toggle>
    )
}