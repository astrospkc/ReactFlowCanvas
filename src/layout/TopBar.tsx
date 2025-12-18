import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronRight, Lightbulb, Settings, Rocket, Folder, Puzzle, ChevronDown, MoreHorizontal, Share2, Moon, Sun, Menu, } from "lucide-react"
import { useAppsQuery } from "@/queries/apps.query"
import { useAppStore } from "@/store/useAppStore"
import { useAppGraphsQuery } from "@/queries/graphs.query"
import { useGraphStore } from "@/store/useGraphStore"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import type { AppType } from "@/types/types"

export default function TopBar() {
    const [dark, setDark] = useState(true)
    const { setSelectedApp, selectedApp, setApps, apps } = useAppStore()
    const { setSelectedNodes, setSelectedEdges } = useGraphStore()
    const [appName, setAppName] = useState('')

    const iconMap = [
        Lightbulb,
        Settings,
        Rocket,
        Folder,
        Puzzle,
    ]
    const colors = ['#6366F1', '#8B5CF6', '#F87171', '#EC4899', '#7C3AED']

    type App = {
        id: string,
        name: string
    }


    const { data: num_apps, isLoading, isError } = useAppsQuery()


    useEffect(() => {
        setApps(num_apps?.data)
    }, [num_apps])
    const handleSelectApp = (appId: string) => {
        setSelectedApp(appId)
        // api call is made to set the graph data
    }

    const appMutation = useMutation({
        mutationFn: (newApp: AppType) => {
            return axios.post('/apps', newApp)
        },
    })

    const handleChangeAppName = (name: string) => {
        setAppName(name)
    }

    function hashStringToIndex(str: string, max: number) {
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i)
            hash |= 0
        }
        return Math.abs(hash) % max
    }

    const handleAddApp = () => {
        const id = crypto.randomUUID()
        const newApp = { id, name: appName }
        appMutation.mutate(newApp)

        setApps([newApp, ...((num_apps?.data) ? num_apps.data : [])])
    }

    const { data: appGraph, isLoading: graphLoading, isError: graphError } = useAppGraphsQuery(selectedApp)
    console.log("apps after adding: ", apps)
    console.log("data in graph: ", appGraph)
    useEffect(() => {
        setSelectedNodes(appGraph?.data?.nodes)
        setSelectedEdges(appGraph?.data?.edges)
    }, [appGraph?.data?.edges, appGraph?.data?.nodes])

    if (isLoading) return <div>Loading...</div>
    if (isError) {
        alert(isError)
    }


    if (graphLoading) return <div>Loading...</div>
    if (graphError) {
        alert(graphError)
    }


    return (
        <div className="  mt-2 bg-slate-950  flex items-center justify-between px-4 pointer-events-auto ">

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
                            <input
                                onChange={(e) => handleChangeAppName(e.target.value)}
                                type="text" placeholder="Search" className="p-1 my-2 bg-slate-800 rounded-xs focus-none outline-none" />
                            <div
                                onClick={handleAddApp}
                                className="w-8 h-8 bg-blue-500 flex hover:cursor-pointer hover:bg-blue-800 justify-center items-center text-center rounded-xs">
                                +
                            </div>
                        </div>
                        <div>
                            {
                                apps && apps.length > 0 && apps.map((app: App) => {
                                    const iconIndex = hashStringToIndex(app.id, 5)
                                    const colorIndex = hashStringToIndex(app.name, colors.length)
                                    const Icon = iconMap[iconIndex]
                                    const color = colors[colorIndex]
                                    const backgroundColor = `bg-${color}`
                                    return (
                                        <DropdownMenuItem
                                            key={app.id}

                                            className="flex items-center justify-between cursor-pointer my-4 focus:bg-neutral-800 bg-transparent hover:shadow-sm hover:shadow-violet-300/60"
                                        >
                                            <div
                                                onClick={() => handleSelectApp(app.id)}
                                                className="flex items-center gap-3 ">
                                                {/* <div className="w-10 h-10 text-2xl rounded-lg bg-neutral-800 flex items-center justify-center"> */}
                                                <Icon className={`w-fit p-1 text-4xl ${backgroundColor} text-white object-contain`} />
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
            <div className="flex items-center gap-2 border border-gray-600 rounded-lg p-1">
                {/* Desktop actions */}
                <div className="hidden md:flex items-center gap-2">
                    <ActionButtons dark={dark} setDark={setDark} />
                </div>

                {/* Mobile menu */}
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-5 h-5 text-white" />
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="end"
                            className="flex flex-col gap-2 bg-slate-900 border border-gray-700 p-2"
                        >
                            <ActionButtons dark={dark} setDark={setDark} />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>


        </div>
    )
}

function ActionButtons({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
    return (
        <>
            <Button variant="ghost" size="icon">
                <Share2 className="w-5 h-5 text-white" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                onClick={() => setDark(!dark)}
            >
                {dark ? (
                    <Moon className="w-5 h-5 text-white" />
                ) : (
                    <Sun className="w-5 h-5 text-white" />
                )}
            </Button>

            <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5 text-white" />
            </Button>

            <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>PK</AvatarFallback>
            </Avatar>
        </>
    )
}

