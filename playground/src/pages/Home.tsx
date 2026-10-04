// Components
import Sidebar from "../components/Sidebar.tsx";
import LibraryComponent from "../components/LibraryComponent/LibraryComponent.tsx";

// Data
import { componentsMenu } from "../data/sidebarMenu.tsx";

export default function Home() {
  return <div className="w-full min-h-screen">
    <Sidebar side={"left"} sidebarMenu={componentsMenu} />

    <div className="grow flex justify-center">
      <div className="flex flex-col gap-10 max-w-[40%] min-w-[40%]">
        {
          componentsMenu.map((menu) => {
            return <section key={menu.id} id={menu.slug}>
              <LibraryComponent title={menu.label} description={menu.description} props={menu.props} sections={menu.sections} />
            </section>;
          })
        }
      </div>
    </div>

    <Sidebar side={"right"} sidebarMenu={componentsMenu} />
  </div>
}
