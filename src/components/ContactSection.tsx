import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5500000000000";

const ContactSection = () => (
  <section id="contato" className="py-24">
    <div className="container text-center">
      <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
        Pronto para <span className="text-primary">escalar</span>?
      </h2>
      <p className="mx-auto mb-10 max-w-md text-muted-foreground">
        Entre em contato e garanta sua BM com estrutura segura para rodar suas campanhas.
      </p>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-10 py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-green-500"
        style={{ boxShadow: "0 0 30px rgba(34,197,94,0.3)" }}
      >
        <MessageCircle size={24} />
        Falar com a Astro Contingência
      </a>
    </div>
  </section>
);

export default ContactSection;
