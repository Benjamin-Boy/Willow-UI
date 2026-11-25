// Components
import ExampleBlock from "../components/LibraryComponent/ExampleBlock";
import CodeBlock from "../components/LibraryComponent/CodeBlock";

// Examples
import { basicButtonExample, buttonGroupExample, buttonWithIconExample, iconButtonExample, loadingButtonExample } from "../components/ExampleFiles/Buttons"
import ButtonComponentPage from "../pages/Components/ButtonComponentPage";

// SELECT
import { basicSelectExample, creatableSelectExample, multipleSelectExample, groupSelectExample } from "../components/ExampleFiles/Selects";
import SelectComponentPage from "../pages/Components/SelectComponentPage";

// RADIO
import { basicRadioExample, radioSizeExample } from "../components/ExampleFiles/Radio";
import RadioComponentPage from "../pages/Components/RadioComponentPage";

// CHECKBOX
import { basicCheckboxExample } from "../components/ExampleFiles/Checkbox";
import CheckboxComponentPage from "../pages/Components/CheckboxComponentPage";

// SWITCH
import { basicSwitchExample, switchGroupExample, switchWithLabelExample } from "../components/ExampleFiles/Switch";
import SwitchComponentPage from "../pages/Components/SwitchComponentPage";

// TOGGLE
import { basicToggleExample, toggleGroupExample } from "../components/ExampleFiles/Toggle";
import ToggleComponentPage from "../pages/Components/ToggleComponentPage";

// TEXTFIELD
import TextFieldComponentPage from "../pages/Components/TextFieldComponentPage";
import { basicTextFieldExample } from "../components/ExampleFiles/TextFields";
import DropdownComponentPage from "../pages/Components/DropdownComponentPage";
import { basicDropdownExample } from "../components/ExampleFiles/Dropdowns";

//TODO Mettre chaque element du tableau dans le ichier corresondant:
//  - basic-button --> BasicButton
//  - Ajouter un index pour compiler tous les composants et construire le componentsMenu
//  - Eviter le gros fichier centralisé

export const componentsMenu = [
    {
        id: 1,
        label: "Button",
        route: "button",
        description: "An interactive and cutomizable button.",
        component: ButtonComponentPage,
        props: basicButtonExample.props,
        sections: [
            {
                id: 1,
                label: "Basic button",
                route: "basic-button",
                description: "A simple button with variants.",
                component: (
                    <div>
                        <ExampleBlock content={basicButtonExample.component} />
                        <CodeBlock code={basicButtonExample.source} />
                    </div>
                ),
            },
            {
                id: 2,
                label: "Button with icons",
                route: "button-with-icons",
                description: "A simple button with icons. The icon can be positioned before label or after label. The icon can also replace the label.",
                component: (
                    <div>
                        <ExampleBlock content={buttonWithIconExample.component} />
                        <CodeBlock code={buttonWithIconExample.source} />
                    </div>
                ),
            },
            {
                id: 3,
                label: "Icon button",
                route: "icon-button",
                description: "A simple icon used as a button",
                component: (
                    <div>
                        <ExampleBlock content={iconButtonExample.component} />
                        <CodeBlock code={iconButtonExample.source} />
                    </div>
                ),
            },
            {
                id: 3,
                label: "Button group",
                route: "button-group",
                description: "A group with multiple buttons",
                component: (
                    <div>
                        <ExampleBlock content={buttonGroupExample.component} />
                        <CodeBlock code={buttonGroupExample.source} />
                    </div>
                ),
            },
            {
                id: 4,
                label: "Loading Button",
                route: "loading-button",
                description: "A button with a loader",
                component: (
                    <div>
                        <ExampleBlock content={loadingButtonExample.component} />
                        <CodeBlock code={loadingButtonExample.source} />
                    </div>
                ),
            },
        ],
    },
    {
        id: 2,
        label: "Select",
        route: "select",
        description: "A set of select menus for various usages.",
        component: SelectComponentPage,
        props: basicSelectExample.props,
        sections: [
            {
                id: 1,
                label: "Basic select",
                route: "basic-select",
                description: "A simple select menu with single entry.",
                component: (
                    <div>
                        <ExampleBlock content={basicSelectExample.component} />
                        <CodeBlock code={basicSelectExample.source} />
                    </div>
                ),
            },
            {
                id: 2,
                label: "Multi select",
                route: "multi-select",
                description: "A simple select menu allowing multiple entries.",
                component: (
                    <div>
                        <ExampleBlock content={multipleSelectExample.component} />
                        <CodeBlock code={multipleSelectExample.source} />
                    </div>
                ),
            },
            {
                id: 3,
                label: "Creatable select",
                route: "creatable-select",
                description: "A select menu allowing option entry creation on the fly.",
                component: (
                    <div>
                        <ExampleBlock content={creatableSelectExample.component} />
                        <CodeBlock code={creatableSelectExample.source} />
                    </div>
                ),
            },
            {
                id: 4,
                label: "Group select",
                route: "group-select",
                description: "A select menu displaying group options.",
                component: (
                    <div>
                        <ExampleBlock content={groupSelectExample.component} />
                        <CodeBlock code={groupSelectExample.source} />
                    </div>
                ),
            },
        ],
    },
    {
        id: 3,
        label: "Radio",
        route: "radio",
        description: "A collection of radio buttons.",
        component: RadioComponentPage,
        props: basicRadioExample.props,
        sections: [
            {
                id: 1,
                label: "Basic radio",
                route: "basic-radio",
                description: "A simple radio button.",
                component: (
                    <div>
                        <ExampleBlock content={basicRadioExample.component} />
                        <CodeBlock code={basicRadioExample.source} />
                    </div>
                ),
            },
            {
                id: 2,
                label: "Radio size",
                route: "radio-size",
                description: "Use the size prop to alter the size of the radio.",
                component: (
                    <div>
                        <ExampleBlock content={radioSizeExample.component} />
                        <CodeBlock code={radioSizeExample.source} />
                    </div>
                ),
            },
        ],
    },
    {
        id: 4,
        label: "Checkbox",
        route: "checkbox",
        description: "A simple checkbox.",
        component: CheckboxComponentPage,
        props: basicCheckboxExample.props,
        sections: [
            {
                id: 1,
                label: "Basic checkbox",
                route: "basic-checkbox",
                description: "A simple checkbox.",
                component: (
                    <div>
                        <ExampleBlock content={basicCheckboxExample.component} />
                        <CodeBlock code={basicCheckboxExample.source} />
                    </div>
                ),
            },
        ],
    },
    {
        id: 5,
        label: "Switch",
        route: "switch",
        description: "A collection of switch buttons",
        component: SwitchComponentPage,
        props: basicSwitchExample.props,
        sections: [
            {
                id: 1,
                label: "Basic Switch",
                route: "basic-switch",
                description: "A simple switch.",
                component: (
                    <div>
                        <ExampleBlock content={basicSwitchExample.component} />
                        <CodeBlock code={basicSwitchExample.source} />
                    </div>
                ),
            },
            {
                id: 2,
                label: "Switch with label",
                route: "label-switch",
                description: "A simple switch with customizable label",
                component: (
                    <div>
                        <ExampleBlock content={switchWithLabelExample.component} />
                        <CodeBlock code={switchWithLabelExample.source} />
                    </div>
                ),
            },
            {
                id: 3,
                label: "Switch group",
                route: "group-switch",
                description: "A group of switch buttons layed out either horizontally or vertically",
                component: (
                    <div>
                        <ExampleBlock content={switchGroupExample.component} />
                        <CodeBlock code={switchGroupExample.source} />
                    </div>
                ),
            },
        ],
    },
    {
        id: 6,
        label: "Toggle",
        route: "toggle",
        description: "A collection of toggle buttons",
        component: ToggleComponentPage,
        props: basicToggleExample.props,
        sections: [
            {
                id: 1,
                label: "Basic Toggle",
                route: "basic-toggle",
                description: "A simple toggle button.",
                component: (
                    <div>
                        <ExampleBlock content={basicToggleExample.component} />
                        <CodeBlock code={basicToggleExample.source} />
                    </div>
                ),
            },
            {
                id: 2,
                label: "Toggle group",
                route: "group-toggle",
                description: "A toggle group.",
                component: (
                    <div>
                        <ExampleBlock content={toggleGroupExample.component} />
                        <CodeBlock code={toggleGroupExample.source} />
                    </div>
                ),
            },
        ],
    },
    {
        id: 7,
        label: "Text field",
        route: "textField",
        description: "A collection of text fields",
        component: TextFieldComponentPage,
        props: basicTextFieldExample.props,
        sections: [
            {
                id: 1,
                label: "Basic Text field",
                route: "basic-textField",
                description: "A simple text field.",
                component: (
                    <div>
                        <ExampleBlock content={basicTextFieldExample.component} />
                        <CodeBlock code={basicTextFieldExample.source} />
                    </div>
                ),
            },
        ],
    },
    {
        id: 8,
        label: "Dropdown",
        route: "dropdown",
        description: "A set of dropdown menus for various usages.",
        component: DropdownComponentPage,
        props: basicDropdownExample.props,
        sections: [
            {
                id: 1,
                label: "Basic dropdown",
                route: "basic-dropdown",
                description: "A simple dropdown menu with single entry.",
                component: (
                    <div>
                        <ExampleBlock content={basicDropdownExample.component} />
                        <CodeBlock code={basicDropdownExample.source} />
                    </div>
                ),
            },
            // {
            //     id: 2,
            //     label: "Multi select",
            //     route: "multi-select",
            //     description: "A simple select menu allowing multiple entries.",
            //     component: (
            //         <div>
            //             <ExampleBlock content={multipleSelectExample.component} />
            //             <CodeBlock code={multipleSelectExample.source} />
            //         </div>
            //     ),
            // },
            // {
            //     id: 3,
            //     label: "Creatable select",
            //     route: "creatable-select",
            //     description: "A select menu allowing option entry creation on the fly.",
            //     component: (
            //         <div>
            //             <ExampleBlock content={creatableSelectExample.component} />
            //             <CodeBlock code={creatableSelectExample.source} />
            //         </div>
            //     ),
            // },
            // {
            //     id: 4,
            //     label: "Group select",
            //     route: "group-select",
            //     description: "A select menu displaying group options.",
            //     component: (
            //         <div>
            //             <ExampleBlock content={groupSelectExample.component} />
            //             <CodeBlock code={groupSelectExample.source} />
            //         </div>
            //     ),
            // },
        ],
    },
]