import { motion } from "framer-motion";

export interface BMData {
  id: string;
  name: string;
  gastoTotal: string;
  ano: number;
  contasAnuncio: number;
  ciclo: string;
  tipoRodou: string;
  formaPagamento: string;
  status: "Disponível" | "Vendida";
  valor: string;
}

const WHATSAPP_URL = "https://wa.me/5500000000000";

const BMCard = ({ bm }: { bm: BMData }) => {
  const available = bm.status === "Disponível";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="gradient-border group relative flex flex-col rounded-xl bg-card p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">{bm.name}</h3>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            available
              ? "bg-accent/15 text-accent"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {bm.status}
        </span>
      </div>

      <div className="space-y-2 text-sm text-secondary-foreground">
        <Row label="Gasto total" value={bm.gastoTotal} />
        <Row label="Ano" value={String(bm.ano)} />
        <Row label="Contas de anúncio" value={String(bm.contasAnuncio)} />
        <Row label="Ciclo" value={bm.ciclo} />
        <Row label="Rodou" value={bm.tipoRodou} />
        <Row label="Pagamento" value={bm.formaPagamento} />
      </div>

      {available && (
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Olá! Tenho interesse na ${bm.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block rounded-lg bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-purple"
        >
          Solicitar essa BM
        </a>
      )}
    </motion.div>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default BMCard;
