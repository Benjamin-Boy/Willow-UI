import { dropdownProps } from "./data/dropdownProps";

import BasicDropdown, { basicDropdownSource } from "./BasicDropdown";
import MultipleDropdown, { multipleDropdownSource } from "./MultipleDropdown";
import CretableDropdown, { creatableDropdownSource } from "./CreatableDropdown";

export const basicDropdownExample = {
    props: dropdownProps,
    component: <BasicDropdown />,
    source: basicDropdownSource,
};

export const multipleDropdownExample = {
    props: dropdownProps,
    component: <MultipleDropdown />,
    source: multipleDropdownSource,
};

export const creatableDropdownExample = {
    props: dropdownProps,
    component: <CretableDropdown />,
    source: creatableDropdownSource,
};


