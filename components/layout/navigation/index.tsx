"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import ThemeSwitcher from "../../utils/themeSwitcher";

export default function Navigation() {
	const buttonRef = useRef<HTMLButtonElement>(null);
	const navRef = useRef<HTMLDivElement>(null);
	const linkRef = useRef<HTMLDivElement>(null);
	const tl = gsap.timeline({ paused: true });
	const router = useRouter()

	useGSAP(() => {
		tl.from(navRef.current, {
			xPercent: 100,
			duration: .6,
			ease: "power1.inOut",
		}).from("#image", {
			opacity: 0,
			xPercent: -100,
		}).from("#link-box a", {
			y: 40,
			opacity: 0,
			duration: 0.4,
			ease: "expo.out",
			stagger: .1
		}).from("#accounts", {
			y: 40,
			opacity: 0,
			duration: 0.4,
			ease: "expo.out"
		});
		tl.reversed(true);
	}, { dependencies: [] });

	function handleClick() {
		tl.reversed() ? tl.play() : tl.reverse();
		buttonRef.current?.children[0].classList.toggle("before:-rotate-45");
		buttonRef.current?.children[0].classList.toggle("before:!top-0");
		buttonRef.current?.children[0].classList.toggle("after:rotate-45");
		buttonRef.current?.children[0].classList.toggle("after:!bottom-0");
		buttonRef.current?.children[0].classList.toggle("!bg-transparent");
	};

	return (
		<>
			<button
				className="h-10 w-8 z-50"
				ref={buttonRef}
				onClick={handleClick}
			>
				<div className="bg-zinc-800 h-1 relative transition-all duration-[0.25s] w-full rounded-full before:top-2 after:bottom-2 before:bg-zinc-800 before:content-[''] before:h-1 before:absolute before:transition-all before:duration-[0.25s] before:w-full before:rounded-full before:left-0 after:bg-zinc-800 after:content-[''] after:h-1 after:absolute after:transition-all after:duration-[0.25s] after:w-full after:rounded-full after:left-0"></div>
			</button>
			<div
				className="fixed inset-0 bg-zinc-300 z-40 flex justify-between"
				ref={navRef}
			>
				<div className="">
					<ThemeSwitcher />
				</div>
				<div 
					className="relative h-full w-2/3 pointer-events-none"
					id="image"
				>
					<Image 
						src="https://picsum.photos/1000/400"
						alt=""
						fill
					/>
				</div>
				<div 
					className="w-1/3 h-full space-y-10 flex flex-col items-center justify-center"
					ref={linkRef}
					id="nav-wrapper"
				>
					<div 
						className="flex space-y-10 flex-col items-center justify-center"
						onClick={handleClick}
						id="link-box"
					>
						<Link href="#" className="text-7xl font-bold relative hover:text-white before:-z-10 before:transition-transform before:origin-bottom hover:before:scale-y-100 before:scale-y-0 before:content-[''] before:bg-black before:absolute before:w-full before:h-full">Home</Link>
						<Link href="#about" className="text-7xl font-bold relative hover:text-white before:-z-10 before:transition-transform before:origin-bottom hover:before:scale-y-100 before:scale-y-0 before:content-[''] before:bg-black before:absolute before:w-full before:h-full">AboutMe</Link>
						<Link href="#tools" className="text-7xl font-bold relative hover:text-white before:-z-10 before:transition-transform before:origin-bottom hover:before:scale-y-100 before:scale-y-0 before:content-[''] before:bg-black before:absolute before:w-full before:h-full">Tools</Link>
						<Link href="#" className="text-7xl font-bold relative hover:text-white before:-z-10 before:transition-transform before:origin-bottom hover:before:scale-y-100 before:scale-y-0 before:content-[''] before:bg-black before:absolute before:w-full before:h-full">test3</Link>
					</div>
					
					<div className="flex space-x-4" id="accounts">
						<Link href="https://github.com/Kqan1" target="_blank"><Github /></Link>
						<Link href="https://www.linkedin.com/in/kaan-e%C5%9Fki-004403246/" target="_blank"><Linkedin /></Link>
						<Link href="https://twitter.com/Kaan__Eski" target="_blank"><Twitter /></Link>
					</div>
				</div>
			</div>
		</>
	);
};