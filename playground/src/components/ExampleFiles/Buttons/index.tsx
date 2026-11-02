import { buttonProps } from "./data/buttonProps";

import BasicButton, { basicButtonSource } from "./BasicButton";
import ButtonWithIcons, { buttonWithIconsSource } from "./ButtonWithIcons";
import IconButton, { iconButtonSource } from "./ButtonIcon";
import ButtonsInGroup, { buttonsInGroupSource } from "./ButtonsInGroup";
import LoadingButton, { loadingButtonSource } from "./LoadingButton";

export const basicButtonExample = {
    props: buttonProps,
    component: <BasicButton />,
    source: basicButtonSource,
};

export const buttonWithIconExample = {
    props: buttonProps,
    component: <ButtonWithIcons />,
    source: buttonWithIconsSource,
};

export const iconButtonExample = {
    props: buttonProps,
    component: <IconButton />,
    source: iconButtonSource,
};

export const buttonGroupExample = {
    props: buttonProps,
    component: <ButtonsInGroup />,
    source: buttonsInGroupSource,
};

export const loadingButtonExample = {
    props: buttonProps,
    component: <LoadingButton />,
    source: loadingButtonSource,
};


