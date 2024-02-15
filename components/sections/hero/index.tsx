"use client";
import { playfairDisplay } from "@/utils/fonts";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
	const [text, setText] = useState<"FullStack Web Developer"|"UI/UX Designer"|"FreeLancer">("FullStack Web Developer");
	const textRef = useRef<HTMLParagraphElement>(null);

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		async function changeText() {
			while (true) {
				await delay(7500);
				setText("UI/UX Designer");
				await delay(7500);
				setText("FreeLancer");
				await delay(7500);
				setText("FullStack Web Developer");
			};
		};
		changeText();
	}, []);

	useGSAP(() => {
		gsap.from(textRef, {
			opacity: 0,
			duration: 0.75,
			y: 30
		});
	}, { dependencies: [text] });

	return (
		<section className="h-screen flex flex-col items-center gap-8 relative">
			<div className="h-2/5 flex flex-col justify-end space-y-4">
				<h1 className={`${playfairDisplay.className} text-8xl`}>Kqan_</h1>
				<p className="text-center text-xl" ref={textRef}>{text}</p>
			</div>
			<div className="absolute bottom-4 w-full px-12 flex justify-center items-center gap-4">
				<p className="bg-gradient-to-l from-zinc-700 to-zinc-200/40 h-px w-[calc(50%-2.5rem)] rounded-full"></p>
				<p className=""><ChevronDown /></p>
				<p className="bg-gradient-to-r from-zinc-700 to-zinc-200/40 h-px w-[calc(50%-2.5rem)] rounded-full"></p>
			</div>
		</section>
	);
}