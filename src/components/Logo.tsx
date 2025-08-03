import { Zap } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-gradient-primary rounded-lg">
        <Zap className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold text-white">Tech Assist</span>
    </div>
  );
};