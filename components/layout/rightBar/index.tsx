import Navigation from "@/components/navigation";
import ScrollBar from "@/components/utils/scrollbar";

export default function RightBar() {
    return (
        <div className="fixed inset-y-0 right-0 h-screen z-50 p-4 flex flex-col items-center">
            <Navigation />
            <ScrollBar />
        </div>
    )
}