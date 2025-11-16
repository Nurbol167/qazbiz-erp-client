import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        login: "Вход", register: "Регистрация", email: "Email", password: "Пароль",
        full_name: "ФИО", company: "Компания", submit: "Отправить",
        dashboard: "Дашборд", clients: "Клиенты", products: "Товары", sales: "Продажи",
        analytics: "Аналитика", profile: "Профиль", logout: "Выйти"
      }
    },
    kz: {
      translation: {
        login: "Кіру", register: "Тіркелу", email: "Email", password: "??пия с?з",
        full_name: "ТА?", company: "Компания", submit: "Жіберу",
        dashboard: "Басты бет", clients: "Клиенттер", products: "Тауарлар", sales: "Сатылымдар",
        analytics: "Аналитика", profile: "Профиль", logout: "Шы?у"
      }
    },
    en: {
      translation: {
        login: "Login", register: "Register", email: "Email", password: "Password",
        full_name: "Full Name", company: "Company", submit: "Submit",
        dashboard: "Dashboard", clients: "Clients", products: "Products", sales: "Sales",
        analytics: "Analytics", profile: "Profile", logout: "Logout"
      }
    }
  },
  lng: "ru",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
