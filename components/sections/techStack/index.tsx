"use client";
import { playfairDisplay } from "@/utils/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { SiAdobeillustrator, SiAdobexd, SiBootstrap, SiCanva, SiFigma, SiGit, SiGithub, SiGreensock, SiJavascript, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPostman, SiPrisma, SiReact, SiTailwindcss, SiTypescript, SiVisualstudiocode } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
	const startRef = useRef(null);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: startRef.current,
				start: "-15% center",
			}
		});
		tl.from("#category-wrapper > h3", {
			y: -30,
			opacity: 0,
			stagger: .075
		}).from("#category-wrapper>#logo-wrapper>svg", {
			stagger: .05,
			opacity: 0,
			y: -50
		})
	}, { dependencies: [] });

	return (
		<section className="h-screen flex flex-col justify-center items-center space-y-16 px-36" ref={startRef} id="tools">
			<h2 className={`${playfairDisplay.className} text-5xl font-semibold`}>TOOLS I&apos;M USING.</h2>
			<div className="w-2/3 space-y-6" id="category-wrapper">
				<h3 className="text-3xl font-medium">Design</h3>
				<div className="space-x-8 flex" id="logo-wrapper">
					<SiAdobeillustrator size={48} />
					<SiFigma size={48} />
					<SiAdobexd size={48} />
					<SiCanva size={48} />
				</div>
			</div>
			<div className="w-2/3 space-y-6" id="category-wrapper">
				<h3 className="text-3xl font-medium">FrontEnd</h3>
				<div className="space-x-8 flex" id="logo-wrapper">
					<SiNextdotjs size={48} />
					<SiReact size={48} />
					<SiJavascript size={48} />
					<SiTypescript size={48} />
					<SiTailwindcss size={48} />
					<SiBootstrap size={48} />
				</div>
			</div>
			<div className="w-2/3 space-y-6" id="category-wrapper">
				<h3 className="text-3xl font-medium">BackEnd</h3>
				<div className="space-x-8 flex" id="logo-wrapper">
					<SiNextdotjs size={48} />
					<SiJavascript size={48} />
					<SiTypescript size={48} />
					<SiPhp size={48} />
					<SiMysql size={48} />
					<SiPostgresql size={48} />
				</div>
			</div>
			<div className="w-2/3 space-y-6" id="category-wrapper">
				<h3 className="text-3xl font-medium">Other</h3>
				<div className="space-x-8 flex" id="logo-wrapper">
					<SiGithub size={48} />
					<SiGit size={48} />
					<SiVisualstudiocode size={48} />
					<SiGreensock size={48} />
                    <SiPostman size={48} />
                    <SiPrisma size={48} />
				</div>
			</div>
		</section>
	);
}