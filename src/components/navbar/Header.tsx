import { Navbar } from "./Navbar";
import { Menu } from "../menu/Menu";
// import { ThemeToggle } from "../theme/Theme-Toggle";

export function Header() {
  return (
    <header className="custom-screen z-10 sticky top-0 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3 mb-10">
      <div className="max-w-3xl mx-auto flex h-14 items-center">
        <Navbar />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <div className="lg:hidden sm:hidden">
              <Menu />
            </div>
          </nav>
        </div>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}
