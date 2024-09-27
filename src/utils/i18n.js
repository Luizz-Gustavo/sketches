import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "title": "Title",
      "subtitle": "Subtitle",
      "details": "Details",
      "statusPending": "Pending",
      "statusUpdating": "Updating",
      "statusApproved": "Approved"
    }
  },
  pt: {
    translation: {
      "title": "Título",
      "subtitle": "Subtítulo",
      "details": "Detalhes",
      "statusPending": "Pendente",
      "statusUpdating": "Atualizando",
      "statusApproved": "Aprovado",
      "statusRejected": "Rejeitado"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // Define o idioma padrão
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;