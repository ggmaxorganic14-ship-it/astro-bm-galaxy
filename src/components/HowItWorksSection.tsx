import { motion } from "framer-motion";
import { MousePointerClick, MessageCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Escolha a BM disponível",
    description: "Navegue pelas opções e escolha a que melhor se encaixa no seu projeto.",
  },
  {
    icon: MessageCircle,
    title: "Entre em contato",
    description: "Fale conosco pelo WhatsApp para tirar dúvidas e fechar negócio.",
  },
  {
    icon: Rocket,
    title: "Pagamento e entrega",
    description: "Após o pagamento, entregamos a estrutura completa pronta para uso.",
  },
];

const HowItWorksSection = () => (
  <section id="como-funciona" className="border-t border-border py-24">
    <div className="container">
      <h2 className="mb-16 text-center text-3xl font-bold tracking-tight sm:text-4xl">
        Como <span className="text-primary">Funciona</span>
      </h2>
      <div className="grid gap-10 sm:grid-cols-3">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <step.icon size={28} />
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Passo {i + 1}
            </p>
            <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
