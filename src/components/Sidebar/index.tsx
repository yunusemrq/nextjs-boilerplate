import clsx from "clsx";
import { useState } from "react";
import { Text } from "../common";

export const Sidebar = () => {
  const [isStretch, setIsStretch] = useState(true) as any;
  return (
    <nav
      className={clsx(
        " p-4 border border-black w-[240px] h-screen transition-all duration-500 rounded-r-xl",
        { "w-[280px]": isStretch, "w-[90px]": !isStretch }
      )}
    >
      <div className="flex justify-between">
        <Text>title</Text>
        <div onClick={() => setIsStretch(!isStretch)}>X</div>
      </div>
    </nav>
  );
};
