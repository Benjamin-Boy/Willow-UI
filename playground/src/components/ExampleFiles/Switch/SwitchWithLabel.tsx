// Libraries
import { Switch } from "@willow/ui";
import { useState } from "react";

export const switchWithLabelSource = `<Switch checked={selectedValueFirstSwitch} 
onChange={handleChangeFirstSwitch} label="Label on the left" position="left" />
<Switch checked={selectedValueSecondSwitch} 
onChange={handleChangeSecondSwitch} square label="Label at the top" position="top" />
<Switch disabled label="Label on the right" position="right" />
<Switch checked disabled label="Label at the bottom" position="bottom" />
`

export default function SwitchWithLabel() {
    const [selectedValueFirstSwitch, setSelectedValueFirstSwitch] = useState(false);
    const [selectedValueSecondSwitch, setSelectedValueSecondSwitch] = useState(true);

    const handleChangeFirstSwitch = () => {
        setSelectedValueFirstSwitch(!selectedValueFirstSwitch);
    };

    const handleChangeSecondSwitch = () => {
        setSelectedValueSecondSwitch(!selectedValueSecondSwitch);
    };

    return (
        <div className="flex gap-5">
            <Switch checked={selectedValueFirstSwitch} onChange={handleChangeFirstSwitch} label="Label on the left" position="left" />
            <Switch checked={selectedValueSecondSwitch} onChange={handleChangeSecondSwitch} square label="Label at the top" position="top" />
            <Switch disabled label="Label on the right" position="right" />
            <Switch checked disabled label="Label at the bottom" position="bottom" />
        </div>
    )
}