import { selectProps } from "./data/selectProps";

import BasicSelect, { basicSelectSource } from "./BasicSelect";
import MultipleSelect, { multipleSelectSource } from "./MultipleSelect";
import CreatableSelect, { creatableSelectSource } from "./CreatableSelect";
import GroupSelect, { groupSelectSource } from "./GroupSelect";

export const basicSelectExample = {
    props: selectProps,
    component: <BasicSelect />,
    source: basicSelectSource,
};

export const multipleSelectExample = {
    props: selectProps,
    component: <MultipleSelect />,
    source: multipleSelectSource,
};

export const creatableSelectExample = {
    props: selectProps,
    component: <CreatableSelect />,
    source: creatableSelectSource,
};

export const groupSelectExample = {
    props: selectProps,
    component: <GroupSelect />,
    source: groupSelectSource,
};