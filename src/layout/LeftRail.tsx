
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
import { useGraphStore } from "@/store/useGraphStore"
import { initialNodes } from "@/canvas/nodes"
import { DefaultNode } from "@/types/types"


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
    const { addNode } = useGraphStore()

    const handleServiceNode = (item: string) => {
        console.log("service node clicked")
        const node = initialNodes.find((node) => node.id === item)
        addNode(node ? node : DefaultNode)
    }



    return (
        <aside className="h-full w-14 flex flex-col items-center bg-black rounded-lg py-3 shadow-md shadow-gray-500/80 pointer-events-auto">
            <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <Tooltip key={item.id}>
                            <TooltipTrigger asChild>
                                <h1
                                    className="hover:shadow-md  hover:shadow-green-300 hover:cursor-pointer p-2 rounded-lg"
                                    onClick={() => handleServiceNode(item.id)}
                                >
                                    <Icon className={`text-2xl my-1  ${item.color}`} />
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
