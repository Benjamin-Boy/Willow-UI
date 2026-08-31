import { Button } from "@willow/ui";
import LibraryComponent from "../components/LibraryComponent";

export default function Home() {
  return <div className="min-h-screen grow flex justify-center">
    <div className="max-w-[40%] min-w-[40%]">
      <LibraryComponent title={"Button"} content={<Button label="Click me" />} />
    </div>
  </div>
}
