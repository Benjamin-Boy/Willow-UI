import { ButtonProps } from "./data/ButtonProps";

import BasicButton, { basicButtonSource } from "./BasicButton";
import ButtonWithIcons, { buttonWithIconsSource } from "./ButtonWithIcons";

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
