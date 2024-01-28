"use client";
import { playfairDisplay } from "@/utils/fonts";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

export default function Hero() {
	const [text, setText] = useState<string>("FullStack Web Developer");
    const textRef = useRef<HTMLParagraphElement>(null);

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		async function test() {
			while (true) {
                await delay(7500);
                setText("UI/UX Designer");
                await delay(7500);
                setText("FreeLancer");
                await delay(7500);
                setText("FullStack Web Developer");
			};
		};
		test();
	}, []);

	useGSAP(() => {
		gsap.from(textRef.current, {
			opacity: 0,
			duration: .75,
			y: 30,
		});
	}, {dependencies: [text]});

	return (
		<section className="h-[1000vh] flex gap-8">
			<div className="w-1/2 flex items-center justify-end">
				<h1 className={`${playfairDisplay.className} text-9xl`}>
					Kaan
				</h1>
			</div>
			<div className="w-1/2 flex items-center whitespace-pre">
				<p ref={textRef}>{text}</p>
			</div>
		</section>
	);
};