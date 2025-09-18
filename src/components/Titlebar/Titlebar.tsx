import React from "react"
import Button from "../ui/Button";
import { MinusIcon, XIcon } from "@phosphor-icons/react";

function Titlebar() {
    return (<div data-tauri-drag-region className="absolute  bg-zinc-950 border-b border-zinc-900 w-full top-0 left-0 drag flex items-center h-[52px]" >
        <div className="font-light text-sm px-4 h-full flex items-center">SINK</div>
        <div className="ml-auto h-fit shrink-0 flex" >
            <Button variant="ghost" className="h-full aspect-square shrink-0" ><MinusIcon></MinusIcon></Button>
            <Button variant="ghost" className="h-full aspect-square shrink-0" ><XIcon></XIcon></Button>
        </div>
    </div>)

}

export default Titlebar;