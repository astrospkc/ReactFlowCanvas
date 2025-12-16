import { ChevronDown, MoreHorizontal, Share2, Moon, Sun, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"

export default function TopBar() {
    const [dark, setDark] = useState(true)

    return (
        <header className="h-14 w-full flex items-center justify-between px-4 border-b border-border bg-background">

            {/* LEFT */}
            <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="w-7 h-7 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-black rotate-45" />
                </div>

                {/* App Selector */}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted text-sm font-medium">
                    <span>supertokens-golang</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>

                {/* More */}
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-5 h-5 text-white" />
                </Button>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2">
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
