"use client";
import { playfairDisplay } from "@/utils/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { SiGreensock, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
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

    const isMobile = width <= 1024;

	useGSAP(() => {
		SplitType.create("#sect-1", { types: "chars" });
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#about",
				scrub: true,
				pin: !isMobile,
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
	}, { dependencies: [isMobile] });

	return (
		<section className="w-[200vw] lg:px-20 px-6" id="about" ref={sectionRef}>
			<div className="w-full h-screen grid place-items-center" id="sect-1">
				<h2 className="text-[17rem] font-bold whitespace-nowrap">
					A STORY WORTH TELLING
				</h2>
			</div>
			<div className="w-[calc(100vw-10rem)] h-screen px-20" id="sect-2">
				<div className="w-5/6 space-y-8">
					<h2 className={`${playfairDisplay.className} font-medium text-7xl mb-20`}>
						HIGH SCHOOL FULL-STACK WEB DEVELOPER 
					</h2>
					<p className="text-2xl">
						As a 10th grade full-stack web developer, I have been immersed in the world of software development for 3 years now. I am well-versed in modern technologies such as 
						<span className="flex items-center">
							<span className="flex items-center gap-1"><SiNextdotjs />Next.js,&nbsp;</span>
							<span className="flex items-center gap-1"><SiReact />React.js,&nbsp;</span>
							<span className="flex items-center gap-1"><SiTypescript />TypeScript,&nbsp;</span>
							<span className="flex items-center gap-1"><SiTailwindcss />Tailwindcss,&nbsp;</span>
							<span className="flex items-center gap-1"><SiPrisma />Prisma and &nbsp;</span>
							<span className="flex items-center gap-1"><SiGreensock />GSAP</span>.
						</span> 
						My proficiency in these cutting-edge tools allows me to create dynamic and visually stunning web applications.
					</p>
				</div>
			</div>
		</section>
	);
}