"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState, useEffect, useRef } from "react";

export default function ScrollBar() {
	const [percentage, setPercentage] = useState<number>(0);
    const [goUpState, setGoUpState] = useState<boolean>(false);
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
    }, { dependencies: [percentage, goUpState], revertOnUpdate: false });

	return (		
		<div className="bg-zinc-300/70 w-3 h-full rounded-md overflow-hidden mt-3">
			<div
				className="bg-zinc-700 rounded-md"
				ref={percentageRef}
			></div>
		</div>
	);
};