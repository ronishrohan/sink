import React from "react";
import Button from "./components/ui/Button";
import { ArrowsClockwiseIcon, GearSixIcon, HandWaving, HandWavingIcon, HouseSimpleIcon } from "@phosphor-icons/react";
import Titlebar from "./components/Titlebar/Titlebar";

const App = () => {
  return (
    <div className="size-full flex bg-zinc-950 text-foreground  items-center justify-center font-martian flex-col gap-2 ">
      <Titlebar />
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
