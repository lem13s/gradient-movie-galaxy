import { Search } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="header-gradient fixed top-0 z-50 w-full px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button className="text-2xl font-bold">Test Name</button>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Music & Audio</Button>
            <Button variant="ghost">Movies & Videos</Button>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search"
              className="h-9 w-64 rounded-full bg-secondary pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Button variant="outline" className="rounded-full">Sign Up | Login</Button>
        </div>
      </div>
    </header>
  );
};