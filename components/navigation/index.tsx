"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Navigation() {
	const menuRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const tl = gsap.timeline({ paused: true });
	useGSAP(
		() => {
			tl.from(menuRef.current, {
				xPercent: 100,
				duration: 1,
				ease: "power1.inOut",
			});
		},
		{ dependencies: [tl] }
	);

	useEffect(() => {
		let isOpen = false;
		function handleClick() {
			isOpen = !isOpen;
			if (isOpen) {
				tl.play();
			} else {
				tl.reverse();
			}
		}

		const buttonElement = buttonRef.current;
		buttonElement?.addEventListener("click", handleClick);
		return () => buttonElement?.removeEventListener("click", handleClick);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<button className="h-10 w-10 z-50" ref={buttonRef}>
				<Menu className="h-full w-full" />
			</button>
			<div className="fixed inset-0 bg-zinc-300 z-40" ref={menuRef}></div>
		</>
	);
};