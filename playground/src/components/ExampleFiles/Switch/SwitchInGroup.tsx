// Libraries
import { Switch, SwitchGroup } from "@willow/ui";
import { useState } from "react";

export const switchGroupSource = `<SwitchGroup layout="horizontally" label="Group" >
    <Switch checked={selectedValueFirstSwitch} onChange={handleChangeFirstSwitch} label="Label 1" />
    <Switch checked={selectedValueFirstSwitch} onChange={handleChangeSecondSwitch} label="Label 2" />
    <Switch checked={selectedValueThirdSwitch} onChange={handleChangeThirdSwitch} label="Label 3" />
    <Switch checked={selectedValueFourthSwitch} onChange={handleChangeFourthSwitch} label="Label 4" />
</SwitchGroup>
`

export default function SwitchInGroup() {
    const [groupLayout, setGroupLayout] = useState(true);

    const [selectedValueFirstSwitch, setSelectedValueFirstSwitch] = useState(false);
    const [selectedValueSecondSwitch, setSelectedValueSecondSwitch] = useState(true);
    const [selectedValueThirdSwitch, setSelectedValueThirdSwitch] = useState(true);
    const [selectedValueFourthSwitch, setSelectedValueFourthSwitch] = useState(true);

    const handleChangeLayoutSwitch = () => {
        setGroupLayout(!groupLayout);
    };

    const handleChangeFirstSwitch = () => {
        setSelectedValueFirstSwitch(!selectedValueFirstSwitch);
    };

    const handleChangeSecondSwitch = () => {
        setSelectedValueSecondSwitch(!selectedValueSecondSwitch);
    };

    const handleChangeThirdSwitch = () => {
        setSelectedValueThirdSwitch(!selectedValueThirdSwitch);
    };

    const handleChangeFourthSwitch = () => {
        setSelectedValueFourthSwitch(!selectedValueFourthSwitch);
    };

    return (
        <div className="relative w-full flex justify-center">
            <div className="absolute right-0 top-0">
                <Switch checked={groupLayout} onChange={handleChangeLayoutSwitch} double label="Horizontally" labelDouble="Vertically" />
            </div>
            <div className="w-max">
                {!groupLayout ?
                    (
                        <SwitchGroup layout={"horizontally"} label="Group horizontal" >
                            <Switch checked={selectedValueFirstSwitch} onChange={handleChangeFirstSwitch} label="Label 1" />
                            <Switch checked={selectedValueSecondSwitch} onChange={handleChangeSecondSwitch} label="Label 2" />
                            <Switch checked={selectedValueThirdSwitch} onChange={handleChangeThirdSwitch} label="Label 3" />
                            <Switch checked={selectedValueFourthSwitch} onChange={handleChangeFourthSwitch} label="Label 4" />
                        </SwitchGroup>
                    )
                    :
                    (
                        <SwitchGroup layout={"vertically"} label="Group vertical" >
                            <Switch checked={selectedValueFirstSwitch} onChange={handleChangeFirstSwitch} label="Label 1" />
                            <Switch checked={selectedValueSecondSwitch} onChange={handleChangeSecondSwitch} label="Label 2" />
                            <Switch checked={selectedValueThirdSwitch} onChange={handleChangeThirdSwitch} label="Label 3" />
                            <Switch checked={selectedValueFourthSwitch} onChange={handleChangeFourthSwitch} label="Label 4" />
                        </SwitchGroup>
                    )
                }
            </div>
        </div>
    )
}