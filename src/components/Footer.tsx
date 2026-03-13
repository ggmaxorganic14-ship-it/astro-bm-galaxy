import logo from "@/assets/logo-astro.png";

const Footer = () =>
<footer className="border-t border-border bg-card py-12">
    <div className="container text-center">
      <img alt="Astro Contingência" className="mx-auto mb-3 h-16 w-16 object-contain" src="/lovable-uploads/41c4ba57-8e04-466e-b0ff-ff8451328b51.png" />
      <p className="text-xl font-bold">
        <span className="text-primary">ASTRO</span> CONTINGÊNCIA
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        Estrutura profissional para tráfego pago
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground">
        
          WhatsApp
        </a>
        <a
        href="https://instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground">
        
          Instagram
        </a>
      </div>

      <p className="mt-8 text-xs text-muted-foreground/60">
        Após a venda, a responsabilidade de uso da BM é do comprador. A Astro Contingência não se
        responsabiliza por usos posteriores da conta.
      </p>
    </div>
  </footer>;


export default Footer;