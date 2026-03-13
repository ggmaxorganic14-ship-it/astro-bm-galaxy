import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo-astro.png";

const WHATSAPP_URL = "https://wa.me/5511989604385";

const HeroSection = () =>
<section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
    {/* Background effects */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" />
    </div>

    <div className="container relative z-10">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center">
      
        <img alt="Astro Contingência" className="mx-auto mb-8 h-28 w-28 object-contain drop-shadow-[0_0_30px_hsl(265,80%,60%,0.4)]" src="/lovable-uploads/8c5e5f88-62a2-4764-8000-5c400350134a.png" />
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          BMs de Alta Qualidade para{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Escalar Seus Anúncios
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Business Managers prontos para rodar tráfego com estrutura segura e organizada.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
          href="#bms"
          className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-purple">
          
            Ver BMs disponíveis
          </a>
          <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-8 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent/20">
          
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  </section>;


export default HeroSection;