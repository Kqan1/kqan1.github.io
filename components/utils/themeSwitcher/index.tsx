"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Laptop2, Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
	const {systemTheme, setTheme} = useTheme();
	const [currentTheme, setCurrentTheme] = useState<"light"|"dark"|"system">("system");

    useEffect(() => {
        switch (currentTheme) {
            case "light":
                setTheme("light");
                break;
            case "dark":
                setTheme("dark");
                break;
            case "system":
                setTheme(`${systemTheme}`);
                break;
            default:
                break;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme]);

	return (
		<div className="flex space-x-2">
            <Sun onClick={()=>setCurrentTheme("light")} />
            <Moon onClick={()=>setCurrentTheme("dark")} />
            <Laptop2 onClick={()=>setCurrentTheme("system")} />
        </div>
	);
}