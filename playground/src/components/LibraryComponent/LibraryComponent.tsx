// Libraries
import type { JSX } from "react";

// Components
import HeaderBlock from "./HeaderBlock";
import PropsBlock from "./PropsBlock";
import SectionBlock from "./SectionBlock";

// Types
interface Props {
    title: string;
    description: string;
    props: JSX.Element;
    sections: any;
}

export default function LibraryComponent(props: Props) {
    return <div className="rounded-lg flex flex-col gap-3 size-full">
        <HeaderBlock title={props.title} description={props.description} />
        <PropsBlock content={props.props} />

        <div className="flex flex-col gap-3">
            {props.sections.map((section: any) => {
                return <SectionBlock title={section.label} description={section.description} component={section.component} />
            })}
        </div>
    </div>
}