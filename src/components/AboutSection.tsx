import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="sobre" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Quem <span className="text-primary">Somos</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A Astro Contingência é especializada em estrutura para tráfego pago, oferecendo BMs
          organizadas e prontas para uso. Trabalhamos com gestores de tráfego, agências e empresas
          que precisam de estrutura segura para rodar campanhas no Meta Ads.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
