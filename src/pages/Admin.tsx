import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Pencil, Trash2, LogOut, ArrowLeft } from "lucide-react";
import { BMData } from "@/components/BMCard";
import { getBMs, addBM, updateBM, deleteBM } from "@/lib/bmStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle } from
"@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle } from
"@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo-astro.png";

const ADMIN_PASS = "astro2024";

interface BMForm {
  name: string;
  gastoTotal: string;
  ano: number;
  contasAnuncio: number;
  ciclo: string;
  tipoRodou: string;
  formaPagamento: string;
  status: "Disponível" | "Vendida";
  valor: string;
  observacoes?: string;
}

const emptyForm: BMForm = {
  name: "",
  gastoTotal: "",
  ano: new Date().getFullYear(),
  contasAnuncio: 1,
  ciclo: "",
  tipoRodou: "",
  formaPagamento: "Empresa",
  status: "Disponível",
  valor: "",
  observacoes: ""
};

const Admin = () => {
  const [authed, setAuthed] = useState(
    () => sessionStorage.getItem("admin_auth") === "true"
  );
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [bms, setBms] = useState<BMData[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<BMForm>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (authed) setBms(getBMs());
  }, [authed]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === ADMIN_PASS) {
      sessionStorage.setItem("admin_auth", "true");
      setAuthed(true);
      setError("");
    } else {
      setError("Senha incorreta");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    setAuthed(false);
  };

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const openEdit = (bm: BMData) => {
    setEditingId(bm.id);
    setForm({
      name: bm.name,
      gastoTotal: bm.gastoTotal,
      ano: bm.ano,
      contasAnuncio: bm.contasAnuncio,
      ciclo: bm.ciclo,
      tipoRodou: bm.tipoRodou,
      formaPagamento: bm.formaPagamento,
      status: bm.status,
      valor: bm.valor || "",
      observacoes: ""
    });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (!form.name || !form.gastoTotal) return;
    if (editingId) {
      updateBM(editingId, form);
    } else {
      addBM(form);
    }
    setBms(getBMs());
    setDialogOpen(false);
  };

  const handleDelete = () => {
    if (deleteId) {
      deleteBM(deleteId);
      setBms(getBMs());
      setDeleteId(null);
    }
  };

  const toggleStatus = (bm: BMData) => {
    const newStatus = bm.status === "Disponível" ? "Vendida" : "Disponível";
    updateBM(bm.id, { status: newStatus });
    setBms(getBMs());
  };

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm space-y-6 rounded-xl border border-border bg-card p-8">
          
          <div className="flex flex-col items-center gap-3">
            <img alt="Astro" className="h-14 w-14" src="/lovable-uploads/7eec1684-f87f-4e85-9cdd-35bc39bcefb0.png" />
            <h1 className="text-xl font-bold text-foreground">
              Painel <span className="text-primary">Admin</span>
            </h1>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Digite a senha" />
            
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full">
            Entrar
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="w-full"
            onClick={() => navigate("/")}>
            
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao site
          </Button>
        </form>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <img alt="Astro" className="h-8 w-8" src="/lovable-uploads/18a5e94b-e66e-4aa9-8c2e-276877e91762.png" />
            <span className="font-bold text-foreground">
              Admin <span className="text-primary">Panel</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-1 h-4 w-4" /> Site
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-1 h-4 w-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            Gerenciar <span className="text-primary">BMs</span>
          </h2>
          <Button onClick={openNew}>
            <Plus className="mr-1 h-4 w-4" /> Nova BM
          </Button>
        </div>

        {/* BM list */}
        <div className="space-y-3">
          {bms.length === 0 &&
          <p className="py-12 text-center text-muted-foreground">
              Nenhuma BM cadastrada.
            </p>
          }
          {bms.map((bm) =>
          <div
            key={bm.id}
            className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
            
              <div className="space-y-1">
                <p className="font-semibold text-foreground">{bm.name}</p>
                <p className="text-sm text-muted-foreground">
                  {bm.gastoTotal} · {bm.ano} · {bm.tipoRodou}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                size="sm"
                variant={bm.status === "Disponível" ? "default" : "secondary"}
                onClick={() => toggleStatus(bm)}
                className="text-xs">
                
                  {bm.status}
                </Button>
                <Button size="icon" variant="ghost" onClick={() => openEdit(bm)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                size="icon"
                variant="ghost"
                className="text-destructive hover:text-destructive"
                onClick={() => setDeleteId(bm.id)}>
                
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add / Edit dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>
              {editingId ? "Editar BM" : "Nova BM"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <Field label="Nome da BM">
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })} />
              
            </Field>
            <Field label="Gasto total">
              <Input
                value={form.gastoTotal}
                onChange={(e) =>
                setForm({ ...form, gastoTotal: e.target.value })
                }
                placeholder="R$ 0" />
              
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Ano">
                <Input
                  type="number"
                  value={form.ano}
                  onChange={(e) =>
                  setForm({ ...form, ano: Number(e.target.value) })
                  } />
                
              </Field>
              <Field label="Contas de anúncio">
                <Input
                  type="number"
                  value={form.contasAnuncio}
                  onChange={(e) =>
                  setForm({ ...form, contasAnuncio: Number(e.target.value) })
                  } />
                
              </Field>
            </div>
            <Field label="Ciclo">
              <Input
                value={form.ciclo}
                onChange={(e) => setForm({ ...form, ciclo: e.target.value })}
                placeholder="R$ 0" />
              
            </Field>
            <Field label="Tipo de campanha que rodou">
              <Input
                value={form.tipoRodou}
                onChange={(e) =>
                setForm({ ...form, tipoRodou: e.target.value })
                } />
              
            </Field>
            <Field label="Forma de pagamento">
              <Select
                value={form.formaPagamento}
                onValueChange={(v) => setForm({ ...form, formaPagamento: v })}>
                
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Empresa">Empresa</SelectItem>
                  <SelectItem value="Pessoal">Pessoal</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Valor (preço de venda)">
              <Input
                value={form.valor}
                onChange={(e) => setForm({ ...form, valor: e.target.value })}
                placeholder="R$ 0" />
            </Field>
            <Field label="Status">
              <Select
                value={form.status}
                onValueChange={(v) =>
                setForm({
                  ...form,
                  status: v as "Disponível" | "Vendida"
                })
                }>
                
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Disponível">Disponível</SelectItem>
                  <SelectItem value="Vendida">Vendida</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Observações">
              <Textarea
                value={form.observacoes}
                onChange={(e) =>
                setForm({ ...form, observacoes: e.target.value })
                }
                rows={3} />
              
            </Field>
          </div>
          <Button onClick={handleSave} className="w-full">
            {editingId ? "Salvar alterações" : "Adicionar BM"}
          </Button>
        </DialogContent>
      </Dialog>

      {/* Delete confirmation */}
      <AlertDialog
        open={!!deleteId}
        onOpenChange={(open) => !open && setDeleteId(null)}>
        
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir BM?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>);

};

const Field = ({
  label,
  children



}: {label: string;children: React.ReactNode;}) =>
<div className="space-y-1.5">
    <Label>{label}</Label>
    {children}
  </div>;


export default Admin;