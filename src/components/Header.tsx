import { Search, Home, Music } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="mx-auto max-w-[1920px]">
        <div className="rounded-b-[1.2rem] backdrop-blur-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-8">
              <button className="text-2xl font-bold font-sf-pro-display">Test Name</button>
              <nav className="hidden md:flex items-center gap-4">
                <Button variant="ghost" className="nav-button">
                  <Home className="h-4 w-4" />
                  Home
                </Button>
                <Button variant="ghost" className="nav-button">
                  <Music className="h-4 w-4" />
                  Music & Audio
                </Button>
                <Button variant="ghost" className="nav-button">
                  Movies & Videos
                </Button>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search"
                  className="h-9 w-64 rounded-[0.8rem] bg-white/10 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <Button variant="outline" className="nav-button border-white/20">
                Sign Up | Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};