import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo-astro.png";

const navItems = [
{ label: "Home", href: "#home" },
{ label: "BMs Disponíveis", href: "#bms" },
{ label: "Como Funciona", href: "#como-funciona" },
{ label: "Contato", href: "#contato" }];


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <img alt="Astro Contingência" className="h-10 w-10 object-contain" src="/lovable-uploads/099f76e1-70ea-4af7-b3f6-ed237f2d6c3e.png" />
          <span>
            <span className="text-glow-purple text-primary">ASTRO</span>{" "}
            <span className="text-foreground">CONTINGÊNCIA</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            
              {item.label}
            </a>
          )}
          <a
            href="#bms"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-purple">
            
            Ver BMs Disponíveis
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden">
          
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-border bg-background md:hidden">
          
            <nav className="container flex flex-col gap-4 py-4">
              {navItems.map((item) =>
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              
                  {item.label}
                </a>
            )}
              <a
              href="#bms"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground glow-purple">
              
                Ver BMs Disponíveis
              </a>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

};

export default Header;