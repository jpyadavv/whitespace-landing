import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1D3A]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4 lg:px-8">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-white">
          <img
              src="/whitespace.jpg"
              alt="logo"
              className="w-14 sm:w-18 md:w-22 lg:w-26 h-auto object-contain rounded-lg"
            />
          <span className="text-xl font-bold tracking-tight">whitespace</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 hover:text-white text-sm font-medium flex items-center gap-1 transition-colors"
            >
              {item}
              {item !== "Pricing" && <ChevronDown className="w-3.5 h-3.5" />}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="border border-[#FFD54F] text-[#FFD54F] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#FFD54F] hover:text-[#0B1D3A] transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-[#FFD54F] text-[#0B1D3A] px-6 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Try Whitespace free →
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0B1D3A] px-4 pb-6 space-y-4">
          {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-white/80 hover:text-white text-sm font-medium py-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#"
              className="border border-[#FFD54F] text-[#FFD54F] px-6 py-2.5 rounded-lg text-sm font-medium text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-[#FFD54F] text-[#0B1D3A] px-6 py-2.5 rounded-lg text-sm font-bold text-center"
            >
              Try Whitepace free →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;