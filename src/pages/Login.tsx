import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => { document.title = "Вход — Tripix"; }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Демо-режим: вход выполнен");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <section className="container py-20 flex-1 flex items-center justify-center">
        <form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-card p-9 shadow-card">
          <h1 className="font-display text-3xl font-bold">Вход в Tripix</h1>
          <p className="mt-2 text-sm text-muted-foreground">Доступ к броням, истории и любимым турам.</p>

          <label className="block mt-6">
            <span className="block text-xs font-medium text-muted-foreground mb-2">Email</span>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </label>
          <label className="block mt-4">
            <span className="block text-xs font-medium text-muted-foreground mb-2">Пароль</span>
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full h-11 rounded-xl border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </label>

          <Button type="submit" size="lg" className="mt-6 w-full rounded-full h-12">Войти</Button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Ещё не с нами? <Link to="/contacts" className="text-primary font-medium hover:underline">Связаться</Link>
          </p>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Login;
