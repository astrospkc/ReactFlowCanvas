
import {
    Boxes,
    LayoutGrid,
    GitBranch
} from "lucide-react"

import { FaGithub, FaBuffer } from "react-icons/fa"
import { SiPostgresql, SiMongodb } from "react-icons/si"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"


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
        <aside className="h-full w-14 flex flex-col items-center bg-black rounded-lg py-3 border-r border-border pointer-events-auto">
            <div className="flex flex-col gap-2">
                {navItems.map((item, _) => {
                    const Icon = item.icon
                    return (
                        <Tooltip key={item.id}>
                            <TooltipTrigger asChild>
                                <h1


                                    className="hover:shadow-lg hover:shadow-green-300 hover:cursor-pointer p-2 rounded-lg"

                                >
                                    <Icon className={`text-3xl my-3  ${item.color}`} />
                                </h1>

                            </TooltipTrigger>
                            <TooltipContent sideOffset={2}>
                                <p>{item.id}</p>
                            </TooltipContent>
                        </Tooltip>

                    )
                })}
            </div>
        </aside>
    )
}
