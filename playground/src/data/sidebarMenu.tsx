// Components
import ExampleBlock from "../components/LibraryComponent/ExampleBlock";
import CodeBlock from "../components/LibraryComponent/CodeBlock";

// Examples
import { buttonExample } from "../components/ExampleFiles/Button"

export const componentsMenu = [
    {
        id: 1,
        label: "Button",
        slug: "button",
        description: "An interactive and cutomizable button",
        props: buttonExample.props,
        sections: [
            {
                id: 1,
                label: "Basic button",
                slug: "basic-button",
                description: "A simple button with variants",
                component: <div>
                    <ExampleBlock content={buttonExample.component} />
                    <CodeBlock code={buttonExample.source} />
                </div>,
            }
        ],
    },
]