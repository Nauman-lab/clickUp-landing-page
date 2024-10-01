import { Button } from "@/components/ui/button"; // Assuming you're using the shadcn Button component
import { ArrowRight } from "lucide-react"; // Importing an icon for the arrow

export default function GradientButton() {
  return (
    <Button className="bg-gradient-to-r from-[#28E0E0] to-[#E200F7] text-white font-bold text-[23px] px-12 py-8 rounded-lg shadow-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity duration-300">
      Get Started. It’s FREE
      <ArrowRight className="h-5 w-5" />
    </Button>
  );
}
