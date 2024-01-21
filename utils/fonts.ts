import { Open_Sans, Noto_Serif } from "next/font/google";

const openSans = Open_Sans({
    subsets: ["latin"] 
});

const notoSerif = Noto_Serif({ 
    subsets: ["latin"] 
});

export { openSans, notoSerif };