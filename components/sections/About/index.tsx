"use client";
import { playfairDisplay } from "@/utils/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
	const sectionRef = useRef<HTMLElement>(null);

	const [width, setWidth] = useState<number>(0);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
		setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

	useGSAP(() => {
		SplitType.create("#sect-1", { types: "chars" });
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#about",
				scrub: true,
				pin: true,
				end: () => "+=" + sectionRef?.current?.offsetWidth
			},
		});
		!isMobile && tl.to("#sect-1", {
				xPercent: -100
			});
		tl.from("#sect-1>h2>div.char", {
			scrollTrigger: {
				trigger: "#sect-1",
				scrub: true,
				start: "top center",
				end: "220% center"
			},
			opacity: .2,
			stagger: .1
		});
	}, { dependencies: [] });

	return (
		<section className="w-[200vw] lg:px-20 px-6" id="about" ref={sectionRef}>
			<div className="w-full h-screen grid place-items-center" id="sect-1">
				<h2 className="text-[17rem] font-bold whitespace-nowrap">
					Lorem ipsum dolor sit amet.
				</h2>
			</div>
			<div className="w-screen h-screen flex justify-center" id="sect-2">
				<div className="lg:w-5/6 w-full grid grid-rows-6">
					<h2 className={`${playfairDisplay.className} font-medium text-7xl`}>Lorem ipsum dolor sit amet.</h2>
					<p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus a commodi quasi corporis, qui amet voluptate consectetur, voluptates, dolor sequi tenetur illum nostrum quod?</p>
					<p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus a commodi quasi corporis, qui amet voluptate consectetur, voluptates, dolor sequi tenetur illum nostrum quod?</p>
					<p className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus a commodi quasi corporis, qui amet voluptate consectetur, voluptates, dolor sequi tenetur illum nostrum quod?</p>
				</div>
			</div>
		</section>
	);
};