import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronRight, Lightbulb, Settings, Rocket, Folder, Puzzle, ChevronDown, MoreHorizontal, Share2, Moon, Sun, } from "lucide-react"

export default function TopBar() {
    const [dark, setDark] = useState(true)


    const iconMap: Record<string, any> = {
        bulb: Lightbulb,
        settings: Settings,
        rocket: Rocket,
        folder: Folder,
        puzzle: Puzzle,
    }
    const apps = [
        { id: "1", name: "supertokens-golang", icon: "bulb", color: "bg-[#6366F1] " },
        { id: "2", name: "supertokens-java", icon: "settings", color: "bg-[#8B5CF6]" },
        { id: "3", name: "supertokens-python", icon: "rocket", color: "bg-[#F87171]" },
        { id: "4", name: "supertokens-ruby", icon: "folder", color: "bg-[#EC4899]" },
        { id: "5", name: "supertokens-go", icon: "puzzle", color: "bg-[#7C3AED]" },
    ]


    return (
        <header className="h-14  my-4 bg-slate-950 w-full flex items-center justify-between px-4 ">

            {/* LEFT */}
            <div className="flex items-center gap-3 border-2 border-gray-600 rounded-lg p-1">
                {/* Logo */}
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center ">
                    <div className="w-4 h-4 bg-black rotate-45" />
                </div>
                {/* App Selector */}
                <DropdownMenu>

                    <div className="flex items-center  bg-black gap-2 px-3 py-1.5 rounded-lg  text-sm font-medium">
                        <div className="flex items-center gap-0">
                            <Lightbulb className=" bg-blue-500 text-white p-1 w-7 h-7 rounded-xs" />
                            <input className="w-full bg-slate-800 px-2 py-2 rounded-lg border-none focus-none outline-none  text-white" type="text" placeholder="supertokens-golang" />
                        </div>

                        <DropdownMenuTrigger asChild>
                            <button className="outline-none cursor-pointer">
                                <ChevronDown className="w-4 h-4 bg-black text-white " />
                            </button>
                        </DropdownMenuTrigger>
                    </div>

                    <DropdownMenuContent className="bg-black px-3 text-white flex flex-col justify-start border-2 border-gray-700">
                        <DropdownMenuLabel className="font-bold">Applications</DropdownMenuLabel>
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder="Search" className="p-1 my-2 bg-slate-800 rounded-xs focus-none outline-none" />
                            <div className="w-8 h-8 bg-blue-500 flex justify-center items-center text-center rounded-xs">
                                +
                            </div>
                        </div>
                        <div>
                            {
                                apps.map((app) => {
                                    const Icon = iconMap[app.icon]
                                    return (
                                        <DropdownMenuItem
                                            key={app.id}

                                            className="flex items-center justify-between cursor-pointer focus:bg-neutral-800"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* <div className="w-10 h-10 text-2xl rounded-lg bg-neutral-800 flex items-center justify-center"> */}
                                                <Icon className={`w-fit p-1 ${app.color} text-white object-contain`} />
                                                {/* </div> */}
                                                <span className="text-sm">{app.name}</span>
                                            </div>

                                            <ChevronRight className="w-4 h-4 opacity-60" />
                                        </DropdownMenuItem>
                                    )
                                })
                            }
                        </div>

                    </DropdownMenuContent>
                </DropdownMenu>


                {/* More */}
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5 text-white" />
                </Button>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 border-2 border-gray-600 rounded-lg p-1 ">
                <Button variant="ghost" size="icon">
                    <Share2 className="w-5 h-5 text-white" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setDark(!dark)}
                >
                    {dark ? <Moon className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5 text-white" />}
                </Button>

                <Button variant="ghost" size="icon">
                    <Settings className="w-5 h-5 text-white" />
                </Button>

                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>PK</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}
