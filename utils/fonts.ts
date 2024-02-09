import { Lato, Playfair_Display } from "next/font/google";

const lato = Lato({
    subsets: ["latin"],
    weight: ["400"] 
});

const playfairDisplay = Playfair_Display({ 
    subsets: ["latin"]
});

export { lato, playfairDisplay };