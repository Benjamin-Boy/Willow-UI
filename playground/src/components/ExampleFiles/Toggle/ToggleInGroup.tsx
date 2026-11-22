// Libraries
import { ToggleGroup, Toggle, TrashStroke, Switch } from "@willow/ui";
import { useState } from "react";

export const toggleInGroupSource = `<ToggleGroup value={toggleValue} onChange={handleToggleValue}>
    <Toggle size="lg" value="left" >
        <TrashStroke className="cursor-pointer" />
    </Toggle>
    <Toggle size="lg" value="center" >
        <TrashStroke className="cursor-pointer" />
    </Toggle>
    <Toggle size="lg" value="right" >
        <TrashStroke className="cursor-pointer" />
    </Toggle>
</ToggleGroup>
`

export default function ToggleInGroup() {
    const [groupLayout, setGroupLayout] = useState(true);

    const [toggleValue, setToggleValue] = useState<string>("left");

    const handleChangeLayoutSwitch = () => {
        setGroupLayout(!groupLayout);
    };

    const handleToggleValue = (value: string) => {
        setToggleValue(value)
    };

    return (
        <div className="relative w-full flex justify-center">
            <div className="absolute right-0 top-0">
                <Switch checked={groupLayout} onChange={handleChangeLayoutSwitch} double label="Horizontally" labelDouble="Vertically" />
            </div>
            <ToggleGroup value={toggleValue} onChange={handleToggleValue} vertically={groupLayout}>
                <Toggle size="lg" value="left" disabled >
                    <TrashStroke className="cursor-pointer" />
                </Toggle>
                <Toggle size="lg" value="center" >
                    <TrashStroke className="cursor-pointer" />
                </Toggle>
                <Toggle size="lg" value="right" >
                    <TrashStroke className="cursor-pointer" />
                </Toggle>
            </ToggleGroup>
        </div>
    )
}