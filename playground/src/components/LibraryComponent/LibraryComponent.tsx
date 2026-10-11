// Libraries
import type { JSX } from "react";

// Components
import HeaderBlock from "./HeaderBlock";
import PropsBlock from "./PropsBlock";
import SectionBlock from "./SectionBlock";
import { PageLayout } from "@willow/ui";

// Types
interface Props {
    title: string;
    description: string;
    props: JSX.Element;
    sections: any;
}

export default function LibraryComponent(props: Props) {
    return (
        <PageLayout rightSidebarMenu={props.sections} >
            <div className="rounded-lg flex flex-col gap-3 size-full">
                <HeaderBlock title={props.title} description={props.description} />
                <PropsBlock content={props.props} />

                <div className="flex flex-col gap-3">
                    {props.sections.map((section: any) => {
                        return <SectionBlock key={section.id} route={section.route} title={section.label} description={section.description} component={section.component} />
                    })}
                </div>
            </div>
        </PageLayout>
    )
}