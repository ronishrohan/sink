import React from "react";
import Button from "./components/ui/Button";
import { ArrowsClockwiseIcon, GearSixIcon, HandWaving, HandWavingIcon, HouseSimpleIcon } from "@phosphor-icons/react";

const App = () => {
  return (
    <div className="size-full flex bg-zinc-950 text-foreground  items-center justify-center font-martian flex-col gap-2 ">
      <div data-tauri-drag-region className="absolute  bg-zinc-950 border-b border-zinc-900 w-full top-0 left-0 drag flex items-center px-4 py-2" >
        <div className="font-light text-sm">SINK</div>
      </div>
      {/* <div className="text-5xl font-black">Sink</div>
      <div className="text-2xl font-black">
        All your things in one place
      </div> */}

      <Button >
        <ArrowsClockwiseIcon size={20} weight="regular" /> Sync now</Button>

      <Button variant="secondary">
        <GearSixIcon  size={20} weight="regular" /> Settings</Button>
    </div>
  );
};

export default App;
