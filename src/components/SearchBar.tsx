import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = "Search technical issues..." }: SearchBarProps) => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Search className="h-8 w-8 text-tech-blue" />
        <h3 className="text-2xl font-bold text-white">Search Technical Issues Quickly</h3>
      </div>
      <p className="text-lg text-white/80 text-center mb-6 max-w-2xl mx-auto">
        Need visual assistance? Upload a screenshot or photo of your problem below
      </p>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-11 pr-4 py-6 text-lg bg-white/80 backdrop-blur-sm border-2 border-tech-gray hover:border-tech-blue focus:border-tech-blue transition-all duration-300 rounded-xl shadow-card"
        />
      </div>
    </div>
  );
};