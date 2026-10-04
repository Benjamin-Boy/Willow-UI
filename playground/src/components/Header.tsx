import { headerMenu } from "../data/headerMenu";

export default function Header() {
  return (
    <div className="bg-zinc-950 sticky top-0 h-12 p-8 flex items-center gap-30 shadow-xl shadow-zinc-950">
      <p className="font-bold text-2xl">Willow UI</p>

      <nav className="flex items-center gap-3">
        {headerMenu.map((entry) => {
          return (
            <div className="cursor-pointer hover:bg-zinc-700 px-2 py-1 rounded transition-all duration-200">
              {entry.label}
            </div>
          )
        })}
      </nav>
    </div>
  )
}
