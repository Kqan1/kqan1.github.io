import { playfairDisplay } from "@/utils/fonts";
import Image from "next/image";

export default function About() {
	return (
		<section className="h-screen flex justify-center items-center gap-8">
			<div className="w-1/2 h-full flex items-center justify-end">
				<div className="relative aspect-square h-2/3">
					<Image 
						src="" 
						alt="" 
						fill 
					/>
				</div>
			</div>
			<div className="w-1/2 h-full grid place-items-center">
				<div className="h-2/3 space-y-4">
					<h2	className={`${playfairDisplay.className} text-5xl font-semibold`}>A STORY WORTH TELLING</h2>
					<blockquote
						cite="https://kqan1.github.io/"
						className="w-2/3"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sit provident voluptates corporis hic tempora debitis
						dolore dolorem accusantium illo rem. Delectus, quas esse
						assumenda officiis illum temporibus unde consequatur
						maiores saepe sapiente eaque obcaecati fugiat, ducimus
						magnam. Reprehenderit, voluptates vel alias tenetur
						amet, iure debitis repellendus modi quod ducimus
						voluptate!
					</blockquote>
				</div>
			</div>
		</section>
	);
}
