import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useTranslation } from "react-i18next";
import "./i18n";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <div dir={i18n.language === "kz" ? "ltr" : "ltr"}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
