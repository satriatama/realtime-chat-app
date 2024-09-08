import { Separator } from "@radix-ui/react-separator";
import NavMain from "./nav-main";
import Logo from "./logo";

export default function Sidebar() {
  return (
    <aside>
      <div className="sticky top-0 z-40 flex h-screen w-[240px] flex-col items-stretch justify-between border-r border-b-border bg-white pt-4 shadow-sm">
        <div className="flex flex-col items-center gap-4">
          <Logo/>
          <NavMain />
        </div>
        <div>
          <Separator className="my-4" />
        </div>
      </div>
    </aside>
  )
}
