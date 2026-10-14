import { ButtonProps } from "./data/ButtonProps";

import BasicButton, { basicButtonSource } from "./BasicButton";
import ButtonWithIcons, { buttonWithIconsSource } from "./ButtonWithIcons";
import IconButton, { iconButtonSource } from "./IconButton";
import ButtonsInGroup, { buttonsInGroupSource } from "./ButtonsInGroup";
import LoadingButton, { loadingButtonSource } from "./LoadingButton";

export const basicButtonExample = {
    props: <ButtonProps />,
    component: <BasicButton />,
    source: basicButtonSource,
};

export const buttonWithIconExample = {
    props: <ButtonProps />,
    component: <ButtonWithIcons />,
    source: buttonWithIconsSource,
};

export const iconButtonExample = {
    props: <ButtonProps />,
    component: <IconButton />,
    source: iconButtonSource,
};

export const buttonGroupExample = {
    props: <ButtonProps />,
    component: <ButtonsInGroup />,
    source: buttonsInGroupSource,
};

export const loadingButtonExample = {
    props: <ButtonProps />,
    component: <LoadingButton />,
    source: loadingButtonSource,
};


