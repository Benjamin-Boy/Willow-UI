import { toggleProps } from "./data/toggleProps";

import BasicToggle, { basicToggleSource } from "./BasicToggle";
import ToggleInGroup, { toggleInGroupSource } from "./ToggleInGroup";

export const basicToggleExample = {
    props: toggleProps,
    component: <BasicToggle />,
    source: basicToggleSource,
};


export const toggleGroupExample = {
    props: toggleProps,
    component: <ToggleInGroup />,
    source: toggleInGroupSource,
};

