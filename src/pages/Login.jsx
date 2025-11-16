import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "", full_name: "", company_name: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const endpoint = isLogin ? "/auth/login" : "/auth/register";
      const res = await api.post(endpoint, form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Ошибка");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="card w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">QazBiz ERP</h1>
        <div className="flex mb-6 border-b">
          <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-center font-medium ${isLogin ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}>{t("login")}</button>
          <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-center font-medium ${!isLogin ? "text-primary border-b-2 border-primary" : "text-gray-500"}`}>{t("register")}</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder={t("email")} value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="input" required />
          <input type="password" placeholder={t("password")} value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="input" required />
          {!isLogin && (
            <>
              <input type="text" placeholder={t("full_name")} value={form.full_name} onChange={e => setForm({...form, full_name: e.target.value})} className="input" required />
              <input type="text" placeholder={t("company")} value={form.company_name} onChange={e => setForm({...form, company_name: e.target.value})} className="input" />
            </>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">{isLogin ? t("login") : t("register")}</button>
        </form>
        <div className="mt-4 flex justify-center space-x-3">
          {["ru", "kz", "en"].map(lang => (
            <button key={lang} onClick={() => i18n.changeLanguage(lang)} className={`text-xs uppercase font-bold px-2 py-1 rounded ${i18n.language === lang ? "bg-primary text-white" : "bg-gray-200"}`}>
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
