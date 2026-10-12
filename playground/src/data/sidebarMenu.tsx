// Components
import ExampleBlock from "../components/LibraryComponent/ExampleBlock";
import CodeBlock from "../components/LibraryComponent/CodeBlock";

// Examples
import { basicButtonExample, buttonWithIconExample } from "../components/ExampleFiles/Buttons"
import ButtonComponentPage from "../pages/Component.tsx/ButtonComponentPage";
import DropdownComponentPage from "../pages/Component.tsx/DropdownComponentPage";

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
                component: <div>
                    <ExampleBlock content={basicButtonExample.component} />
                    <CodeBlock code={basicButtonExample.source} />
                </div>,
            },
            {
                id: 2,
                label: "Button with icons",
                route: "button-with-icons",
                description: "A simple button with icons. The icon can be positioned before label or after label. The icon can also replace the label.",
                component: <div>
                    <ExampleBlock content={buttonWithIconExample.component} />
                    <CodeBlock code={buttonWithIconExample.source} />
                </div>,
            },
        ],
    },
    {
        id: 2,
        label: "Dropdown Menu",
        route: "dropdown",
        description: "An interactive and cutomizable button.",
        component: DropdownComponentPage,
        props: basicButtonExample.props,
        sections: [
            {
                id: 1,
                label: "Basic button",
                route: "basic-button",
                description: "A simple button with variants.",
                component: <div>
                    <ExampleBlock content={basicButtonExample.component} />
                    <CodeBlock code={basicButtonExample.source} />
                </div>,
            },
            {
                id: 2,
                label: "Button with icons",
                route: "button-with-icons",
                description: "A simple button with icons. The icon can be positioned before label or after label. The icon can also replace the label.",
                component: <div>
                    <ExampleBlock content={buttonWithIconExample.component} />
                    <CodeBlock code={buttonWithIconExample.source} />
                </div>,
            },
        ],
    },
]