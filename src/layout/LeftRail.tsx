import {
    Boxes,
    LayoutGrid,
    GitBranch
} from "lucide-react"

import { FaGithub, FaBuffer } from "react-icons/fa"
import { SiPostgresql, SiMongodb } from "react-icons/si"

import clsx from "clsx"

const navItems = [
    { id: "github", icon: FaGithub, color: "text-white" },
    { id: "postgres", icon: SiPostgresql, color: "text-blue-500" },
    { id: "redis", icon: FaBuffer, color: "text-red-500" },
    { id: "mongo", icon: SiMongodb, color: "text-green-500" },
    { id: "services", icon: Boxes, color: "text-gray-500" },
    { id: "apps", icon: LayoutGrid, color: "text-yellow-500" },
    { id: "flow", icon: GitBranch, color: "text-green-500" }
]

export default function LeftRail() {
    return (
        <aside className="h-full w-14 flex flex-col items-center bg-black rounded-lg py-3 border-r border-border">
            <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                    const Icon = item.icon
                    const active = index === 0

                    return (
                        <h1
                            key={item.id}
                        // className={clsx(
                        //     "w-10 h-10 rounded-lg flex  items-center justify-center ",
                        //     active
                        //         ? "bg-primary text-primary-foreground"
                        //         : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        // )}
                        >
                            <Icon className={`text-3xl my-3  ${item.color}`} />
                        </h1>
                    )
                })}
            </div>
        </aside>
    )
}
