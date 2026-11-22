import { radioProps } from "./data/radioProps";

import BasicRadio, { basicRadioSource } from "./BasicRadio";
import RadioSize, { radioSizeSource } from "./RadioSize";

export const basicRadioExample = {
    props: radioProps,
    component: <BasicRadio />,
    source: basicRadioSource,
};

export const radioSizeExample = {
    props: radioProps,
    component: <RadioSize />,
    source: radioSizeSource,
};