"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
	useGSAP(()=>{
		SplitType.create("#about>div>h2", { types: "chars" });
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#about",
				scrub: true,
				start: "top center",
				end: "45% center",
				markers: true
			},
		});
		tl.from("#about>div>h2>div.char", {
			y: 30,
			opacity: 0,
			stagger: .1,
			skewX: -15
		});
	}, { dependencies: [] });

	return (
		<section className="h-screen flex items-center justify-center" id="about">
			<div className="h-1/2 w-2/3">
				<h2 className="text-6xl font-semibold">
					Lorem ipsum dolor sit amet.<br/>
					Lorem ipsum dolor sit amet
				</h2>
			</div>
		</section>
	);
}