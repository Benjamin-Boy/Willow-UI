import { switchProps } from "./data/switchProps";

import BasicSwitch, { basicSwitchSource } from "./BasicSwitch";
import SwitchWithLabel, { switchWithLabelSource } from "./SwitchWithLabel";
import SwitchInGroup, { switchGroupSource } from "./SwitchInGroup";

export const basicSwitchExample = {
    props: switchProps,
    component: <BasicSwitch />,
    source: basicSwitchSource,
};

export const switchWithLabelExample = {
    props: switchProps,
    component: <SwitchWithLabel />,
    source: switchWithLabelSource,
};

export const switchGroupExample = {
    props: switchProps,
    component: <SwitchInGroup />,
    source: switchGroupSource,
};



