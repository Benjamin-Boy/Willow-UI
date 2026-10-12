// Libraries
import { useLocation } from "react-router";

// Components
import LibraryComponent from "../../components/LibraryComponent/LibraryComponent";

// Data
import { componentsMenu } from "../../data/sidebarMenu";

export default function DropdownComponentPage() {
    const locationObj = useLocation();
    const location = locationObj.pathname.split("/").pop();

    const activeSection = componentsMenu.find((menu) => menu.route === location);

    return (
        <div className="grow flex justify-center p-8">
            <div className="flex flex-col gap-10 max-w-[40%] min-w-[40%]">
                {/* TODO AJOUTER UN LOADER SI PAS DE activeSection */}
                {activeSection && (
                    <section key={activeSection.id} >
                        <LibraryComponent title={activeSection.label} description={activeSection.description} props={activeSection.props} sections={activeSection.sections} />
                    </section>
                )}
            </div>
        </div>
    )
}
