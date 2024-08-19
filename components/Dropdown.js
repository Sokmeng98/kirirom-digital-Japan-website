import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
const Dropdown = ({ title, children, isTop, applySpecialStyle }) => {
  return (
    <>
      <NavigationMenu className="bg-transparent">
        <NavigationMenuList className="bg-transparent">
          <NavigationMenuItem className="w-fit">
            <NavigationMenuTrigger
              className={` bg-transparent ${
                isTop
                  ? "text-[#ffff] "
                  : " !text-[#ffff] hover:text-white focus:text-white"
              } ${
                applySpecialStyle
                  ? "text-[#ffff] hover:text-white focus:text-white"
                  : "text-[#091C3E]"
              } `}
            >
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-fit">
              <NavigationMenuLink>
                <div className="w-[200px] p-4 flex flex-col gap-4">
                  {children}
                </div>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Dropdown;
