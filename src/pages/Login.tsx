import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Lock, Shield, User } from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({ login: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Вход для администратора — Tripix";
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Демо-режим: проверка тестовых данных админа
    setTimeout(() => {
      if (form.login === "admin" && form.password === "admin123") {
        toast.success("Добро пожаловать, администратор!");
        navigate("/");
      } else {
        toast.error("Неверный логин или пароль");
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <section className="container py-20 flex-1 flex items-center justify-center">
        <form
          onSubmit={submit}
          className="w-full max-w-md rounded-3xl bg-card p-9 shadow-card border border-border"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="grid h-11 w-11 place-items-center rounded-2xl gradient-sunset shadow-glow">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </span>
            <div>
              <h1 className="font-display text-2xl font-bold leading-tight">
                Панель администратора
              </h1>
              <p className="text-xs text-muted-foreground">Tripix • Закрытая зона</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Только для сотрудников. Введите служебные данные, чтобы получить доступ к управлению турами и заявками.
          </p>

          <label className="block mt-6">
            <span className="block text-xs font-medium text-muted-foreground mb-2">
              Логин администратора
            </span>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                autoComplete="username"
                value={form.login}
                onChange={(e) => setForm({ ...form, login: e.target.value })}
                placeholder="admin"
                className="w-full h-11 rounded-xl border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </label>

          <label className="block mt-4">
            <span className="block text-xs font-medium text-muted-foreground mb-2">
              Пароль
            </span>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="password"
                autoComplete="current-password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full h-11 rounded-xl border border-input bg-background pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </label>

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="mt-6 w-full rounded-full h-12"
          >
            {loading ? "Проверяем..." : "Войти в панель"}
          </Button>

          <div className="mt-5 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">Демо-доступ</p>
            <p>Логин: <code className="text-foreground">admin</code></p>
            <p>Пароль: <code className="text-foreground">admin123</code></p>
          </div>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Login;
