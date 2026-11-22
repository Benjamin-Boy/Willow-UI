// Libraries
import { NavLink, useLocation } from "react-router";

// Types
import type { NavMenuEntry } from "../AppLayout";
import type { JSX } from "react";
interface Props {
  menu?: NavMenuEntry[];
  homeButton?: JSX.Element;
}

export default function Header(props: Props) {
  const location = useLocation();

  return (
    <div className="bg-zinc-950 sticky top-0 flex items-center gap-1 shadow-xl shadow-zinc-950">
      <div className="min-w-60">{props.homeButton}</div>

      {props.menu && <nav className="flex items-center justify-end w-full gap-3 p-4">
        {props.menu.map((entry) => {
          const isActive = location.pathname.split("/").includes(entry.label.toLowerCase())

          return (
            <NavLink key={entry.id} to={{
              pathname: entry.route,
            }}
              discover="none"
              className={`cursor-pointer ${isActive ? "bg-zinc-900" : "hover:bg-zinc-800"} px-2 py-1 rounded transition-all duration-200`}>
              {entry.label}
            </NavLink>
          )
        })}
      </nav>}

      <div className="min-w-60" />
    </div>
  )
}
