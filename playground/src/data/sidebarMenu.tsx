// Components
import ExampleBlock from "../components/LibraryComponent/ExampleBlock";
import CodeBlock from "../components/LibraryComponent/CodeBlock";

// Examples
import { basicButtonExample, buttonGroupExample, buttonWithIconExample, iconButtonExample, loadingButtonExample } from "../components/ExampleFiles/Buttons"
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
            {
                id: 3,
                label: "Icon button",
                route: "icon-button",
                description: "A simple icon used as a button",
                component: <div>
                    <ExampleBlock content={iconButtonExample.component} />
                    <CodeBlock code={iconButtonExample.source} />
                </div>,
            },
            {
                id: 3,
                label: "Button group",
                route: "button-group",
                description: "A group with multiple buttons",
                component: <div>
                    <ExampleBlock content={buttonGroupExample.component} />
                    <CodeBlock code={buttonGroupExample.source} />
                </div>,
            },
            {
                id: 4,
                label: "Loading Button",
                route: "loading-button",
                description: "A button with a loader",
                component: <div>
                    <ExampleBlock content={loadingButtonExample.component} />
                    <CodeBlock code={loadingButtonExample.source} />
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