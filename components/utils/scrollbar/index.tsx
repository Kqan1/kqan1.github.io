"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

export default function ScrollBar() {
	const [percentage, setPercentage] = useState<number>(0);
    const percentageRef = useRef<HTMLDivElement>(null);

    const getPercentage = (number1: number, number2: number) => {
		return (100 * number1) / number2;
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const newPercentage = getPercentage(scrollTop, scrollHeight);
			setPercentage(newPercentage);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useGSAP(() => {
		gsap.to(percentageRef.current, {
			height: `${percentage}%`,
			duration: 0.1,
		});
    }, { dependencies: [percentage] });

	return (		
		<div className="lg:w-3 w-1 fixed lg:static inset-y-0 right-0 h-full lg:rounded-md lg:mt-3 z-50 border-zinc-800 lg:border">
			<div
				className="bg-zinc-800 lg:rounded-md"
				ref={percentageRef}
			></div>
		</div>
	);
};