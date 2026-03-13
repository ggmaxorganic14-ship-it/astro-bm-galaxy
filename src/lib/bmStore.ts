import { BMData } from "@/components/BMCard";

const STORAGE_KEY = "astro_bms";

const defaultBMs: BMData[] = [
  {
    id: "1",
    name: "BM 001",
    gastoTotal: "R$ 80.291",
    ano: 2024,
    contasAnuncio: 5,
    ciclo: "R$ 11",
    tipoRodou: "White - Loja de roupas",
    formaPagamento: "Empresa",
    status: "Disponível",
  },
  {
    id: "2",
    name: "BM 002",
    gastoTotal: "R$ 45.320",
    ano: 2023,
    contasAnuncio: 3,
    ciclo: "R$ 8",
    tipoRodou: "White - Infoproduto",
    formaPagamento: "Pessoal",
    status: "Disponível",
  },
  {
    id: "3",
    name: "BM 003",
    gastoTotal: "R$ 120.500",
    ano: 2024,
    contasAnuncio: 7,
    ciclo: "R$ 15",
    tipoRodou: "White - E-commerce",
    formaPagamento: "Empresa",
    status: "Vendida",
  },
];

export function getBMs(): BMData[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBMs));
    return defaultBMs;
  }
  return JSON.parse(stored);
}

export function saveBMs(bms: BMData[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bms));
}

export function addBM(bm: Omit<BMData, "id">): BMData {
  const bms = getBMs();
  const newBM = { ...bm, id: crypto.randomUUID() };
  bms.push(newBM);
  saveBMs(bms);
  return newBM;
}

export function updateBM(id: string, data: Partial<BMData>) {
  const bms = getBMs().map((bm) => (bm.id === id ? { ...bm, ...data } : bm));
  saveBMs(bms);
}

export function deleteBM(id: string) {
  saveBMs(getBMs().filter((bm) => bm.id !== id));
}
