// Libraries
import { Switch } from "@willow/ui";
import { useState } from "react";

export const basicSwitchSource = `<Switch checked={selectedValueFirstSwitch} onChange={handleChangeFirstSwitch} />
<Switch checked={selectedValueSecondSwitch} onChange={handleChangeSecondSwitch} square />
<Switch disabled />
<Switch checked disabled />
`

export default function BasicSwitch() {
    const [selectedValueFirstSwitch, setSelectedValueFirstSwitch] = useState(false);
    const [selectedValueSecondSwitch, setSelectedValueSecondSwitch] = useState(true);

    const handleChangeFirstSwitch = () => {
        setSelectedValueFirstSwitch(!selectedValueFirstSwitch);
    };

    const handleChangeSecondSwitch = () => {
        setSelectedValueSecondSwitch(!selectedValueSecondSwitch);
    };

    return (
        <div className="flex gap-3">
            <Switch checked={selectedValueFirstSwitch} onChange={handleChangeFirstSwitch} />
            <Switch checked={selectedValueSecondSwitch} onChange={handleChangeSecondSwitch} square />
            <Switch disabled />
            <Switch checked disabled />
        </div>
    )
}