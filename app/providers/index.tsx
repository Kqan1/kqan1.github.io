"use client";
import { ThemeProvider } from "next-themes";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReactLenis root>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</ReactLenis>
	);
};