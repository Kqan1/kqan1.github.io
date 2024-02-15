import Navigation from "@/components/layout/navigation";
import ScrollBar from "@/components/utils/scrollbar";
import Link from "next/link";

export default function Layout() {
	return (
		<>
			<div className="fixed z-50 hidden lg:flex flex-col items-center w-16 p-4 space-y-4 left-0 inset-y-0">
				<div className="h-[35%] w-px bg-gradient-to-t from-zinc-700 to-zinc-200/40 rounded-full"></div>
				<div className="h-[30%] flex items-center">
					<div className="flex -rotate-90 space-x-4">
						<Link
							href="https://github.com/Kqan1"
							target="_blank"
							className="hover:text-white relative before:-z-10 before:transition-transform before:origin-bottom hover:before:scale-y-100 before:scale-y-0 before:content-[''] before:bg-black before:absolute before:w-full before:h-full"
						>
							Github
						</Link>
						<span>/</span>
						<Link
							href="https://www.linkedin.com/in/kaan-e%C5%9Fki-004403246/"
							target="_blank"
							className="hover:text-white relative before:-z-10 before:transition-transform before:origin-bottom hover:before:scale-y-100 before:scale-y-0 before:content-[''] before:bg-black before:absolute before:w-full before:h-full"
						>
							Linkedin
						</Link>
						<span>/</span>
						<Link
							href="https://twitter.com/Kaan__Eski"
							target="_blank"
							className="hover:text-white relative before:-z-10 before:transition-transform before:origin-bottom hover:before:scale-y-100 before:scale-y-0 before:content-[''] before:bg-black before:absolute before:w-full before:h-full"
						>
							Twitter
						</Link>
					</div>
				</div>
				<div className="h-[35%] w-px bg-gradient-to-b from-zinc-700 to-zinc-200/40 rounded-full"></div>
			</div>
			<div className="fixed inset-y-0 right-0 z-50 p-4 flex flex-col items-center">
				<Navigation />
				<ScrollBar />
			</div>
		</>
	);
};