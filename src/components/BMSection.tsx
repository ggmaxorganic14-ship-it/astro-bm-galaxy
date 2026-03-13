import { useState, useEffect } from "react";
import BMCard from "./BMCard";
import { getBMs } from "@/lib/bmStore";
import type { BMData } from "./BMCard";

const BMSection = () => {
  const [bms, setBms] = useState<BMData[]>([]);

  useEffect(() => {
    setBms(getBMs());
  }, []);

  const available = bms.filter((b) => b.status === "Disponível");
  const sold = bms.filter((b) => b.status === "Vendida");

  return (
    <section id="bms" className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          BMs <span className="text-primary">Disponíveis</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((bm) => (
            <BMCard key={bm.id} bm={bm} />
          ))}
        </div>
        {sold.length > 0 && (
          <>
            <h3 className="mb-6 mt-16 text-center text-2xl font-bold text-muted-foreground">
              Vendidas
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sold.map((bm) => (
                <BMCard key={bm.id} bm={bm} />
              ))}
            </div>
          </>
        )}
        {bms.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            Nenhuma BM cadastrada no momento.
          </p>
        )}
      </div>
    </section>
  );
};

export default BMSection;
