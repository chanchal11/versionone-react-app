import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

const resources = {
  en: {
    translation: {
      "userListTitle": "User List",
      "userDetailTitle": "User Detail",
      "userID": "User ID",
      "userName": "User Name",
      "services": "Services",
      "homeAddress": "Home Address",
      "workAddress": "Work Address",
      "typeOfService": "Type of Service",
      "startDate": "Start Date",
      "expDate": "Expiry Date",
      "viewDetails": "View Details",
      "noData": "No data available",
      "countOfServices": "Count of Services"
    }
  },
  ar: {
    translation: {
      "userListTitle": "قائمة المستخدمين",
      "userDetailTitle": "تفاصيل المستخدم",
      "userID": "معرف المستخدم",
      "userName": "اسم المستخدم",
      "services": "الخدمات",
      "homeAddress": "عنوان المنزل",
      "workAddress": "عنوان العمل",
      "typeOfService": "نوع الخدمة",
      "startDate": "تاريخ البدء",
      "expDate": "تاريخ الانتهاء",
      "viewDetails": "عرض التفاصيل",
      "noData": "لا توجد بيانات",
      "countOfServices": "عدد الخدمات"
    }
  }
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
