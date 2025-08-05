import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'english' | 'spanish' | 'french' | 'german' | 'italian' | 'portuguese' | 'chinese' | 'japanese' | 'korean' | 'russian' | 'arabic' | 'hindi' | 'dutch' | 'swedish' | 'norwegian';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  // Header
  'signUp': {
    english: 'Sign Up',
    spanish: 'Registrarse',
    french: 'S\'inscrire',
    german: 'Registrieren',
    italian: 'Iscriviti',
    portuguese: 'Inscrever-se',
    chinese: '注册',
    japanese: 'サインアップ',
    korean: '가입',
    russian: 'Регистрация',
    arabic: 'اشتراك',
    hindi: 'साइन अप',
    dutch: 'Aanmelden',
    swedish: 'Registrera',
    norwegian: 'Registrer'
  },
  'signIn': {
    english: 'Sign In',
    spanish: 'Iniciar Sesión',
    french: 'Se Connecter',
    german: 'Anmelden',
    italian: 'Accedi',
    portuguese: 'Entrar',
    chinese: '登录',
    japanese: 'サインイン',
    korean: '로그인',
    russian: 'Войти',
    arabic: 'تسجيل الدخول',
    hindi: 'साइन इन',
    dutch: 'Inloggen',
    swedish: 'Logga in',
    norwegian: 'Logg inn'
  },
  // Hero Section
  'heroTitle': {
    english: 'Expert Tech Support at Your Fingertips',
    spanish: 'Soporte Técnico Experto al Alcance de Tus Dedos',
    french: 'Support Technique Expert à Portée de Main',
    german: 'Experten-Tech-Support auf Knopfdruck',
    italian: 'Supporto Tecnico Esperto a Portata di Mano',
    portuguese: 'Suporte Técnico Especializado ao Alcance dos Seus Dedos',
    chinese: '专业技术支持触手可及',
    japanese: '専門的なテクニカルサポートがすぐそこに',
    korean: '전문가 기술 지원이 손끝에',
    russian: 'Экспертная техническая поддержка у вас под рукой',
    arabic: 'دعم تقني خبير في متناول يدك',
    hindi: 'विशेषज्ञ तकनीकी सहायता आपकी उंगलियों पर',
    dutch: 'Expert technische ondersteuning binnen handbereik',
    swedish: 'Expert teknisk support inom räckhåll',
    norwegian: 'Ekspert teknisk støtte innen rekkevidde'
  },
  'heroSubtitle': {
    english: 'Get instant solutions for all your technical problems with our 24/7 support team',
    spanish: 'Obtén soluciones instantáneas para todos tus problemas técnicos con nuestro equipo de soporte 24/7',
    french: 'Obtenez des solutions instantanées pour tous vos problèmes techniques avec notre équipe de support 24/7',
    german: 'Erhalten Sie sofortige Lösungen für alle Ihre technischen Probleme mit unserem 24/7-Support-Team',
    italian: 'Ottieni soluzioni istantanee per tutti i tuoi problemi tecnici con il nostro team di supporto 24/7',
    portuguese: 'Obtenha soluções instantâneas para todos os seus problemas técnicos com nossa equipe de suporte 24/7',
    chinese: '通过我们的24/7支持团队获得所有技术问题的即时解决方案',
    japanese: '24時間年中無休のサポートチームで、すべての技術的な問題の即座の解決策を取得',
    korean: '24/7 지원 팀으로 모든 기술적 문제에 대한 즉각적인 해결책을 얻으십시오',
    russian: 'Получите мгновенные решения всех ваших технических проблем с нашей круглосуточной командой поддержки',
    arabic: 'احصل على حلول فورية لجميع مشاكلك التقنية مع فريق الدعم المتاح 24/7',
    hindi: 'हमारी 24/7 सहायता टीम के साथ अपनी सभी तकनीकी समस्याओं के लिए तत्काल समाधान प्राप्त करें',
    dutch: 'Krijg directe oplossingen voor al uw technische problemen met ons 24/7 ondersteuningsteam',
    swedish: 'Få omedelbara lösningar för alla dina tekniska problem med vårt 24/7 supportteam',
    norwegian: 'Få umiddelbare løsninger for alle dine tekniske problemer med vårt 24/7 supportteam'
  },
  // Search
  'searchPlaceholder': {
    english: 'Search for technical issues...',
    spanish: 'Buscar problemas técnicos...',
    french: 'Rechercher des problèmes techniques...',
    german: 'Nach technischen Problemen suchen...',
    italian: 'Cerca problemi tecnici...',
    portuguese: 'Pesquisar problemas técnicos...',
    chinese: '搜索技术问题...',
    japanese: '技術的な問題を検索...',
    korean: '기술적 문제 검색...',
    russian: 'Поиск технических проблем...',
    arabic: 'البحث عن المشاكل التقنية...',
    hindi: 'तकनीकी समस्याओं की खोज करें...',
    dutch: 'Zoeken naar technische problemen...',
    swedish: 'Sök efter tekniska problem...',
    norwegian: 'Søk etter tekniske problemer...'
  },
  // Sidebar
  'helpCenter': {
    english: 'Help Center',
    spanish: 'Centro de Ayuda',
    french: 'Centre d\'Aide',
    german: 'Hilfezentrum',
    italian: 'Centro Assistenza',
    portuguese: 'Centro de Ajuda',
    chinese: '帮助中心',
    japanese: 'ヘルプセンター',
    korean: '도움말 센터',
    russian: 'Центр помощи',
    arabic: 'مركز المساعدة',
    hindi: 'सहायता केंद्र',
    dutch: 'Helpcentrum',
    swedish: 'Hjälpcenter',
    norwegian: 'Hjelpesenter'
  },
  'chooseSupport': {
    english: 'Choose how you\'d like to get support',
    spanish: 'Elige cómo te gustaría obtener soporte',
    french: 'Choisissez comment vous aimeriez obtenir du support',
    german: 'Wählen Sie, wie Sie Support erhalten möchten',
    italian: 'Scegli come vorresti ottenere supporto',
    portuguese: 'Escolha como gostaria de obter suporte',
    chinese: '选择您希望如何获得支持',
    japanese: 'サポートの受け方を選択してください',
    korean: '지원을 받고 싶은 방법을 선택하세요',
    russian: 'Выберите, как вы хотели бы получить поддержку',
    arabic: 'اختر كيف تريد الحصول على الدعم',
    hindi: 'चुनें कि आप कैसे सहायता प्राप्त करना चाहते हैं',
    dutch: 'Kies hoe u ondersteuning wilt krijgen',
    swedish: 'Välj hur du vill få support',
    norwegian: 'Velg hvordan du vil få støtte'
  },
  'bookCall': {
    english: 'Book a Call',
    spanish: 'Reservar una Llamada',
    french: 'Réserver un Appel',
    german: 'Anruf Buchen',
    italian: 'Prenota una Chiamata',
    portuguese: 'Agendar uma Chamada',
    chinese: '预约通话',
    japanese: '電話を予約',
    korean: '통화 예약',
    russian: 'Забронировать звонок',
    arabic: 'حجز مكالمة',
    hindi: 'कॉल बुक करें',
    dutch: 'Een gesprek boeken',
    swedish: 'Boka ett samtal',
    norwegian: 'Book en samtale'
  },
  'scheduleVideoCall': {
    english: 'Schedule a video call with our experts',
    spanish: 'Programa una videollamada con nuestros expertos',
    french: 'Planifiez un appel vidéo avec nos experts',
    german: 'Planen Sie einen Videoanruf mit unseren Experten',
    italian: 'Pianifica una videochiamata con i nostri esperti',
    portuguese: 'Agende uma videochamada com nossos especialistas',
    chinese: '与我们的专家安排视频通话',
    japanese: '専門家とのビデオ通話をスケジュール',
    korean: '전문가와 화상 통화 일정 잡기',
    russian: 'Запланируйте видеозвонок с нашими экспертами',
    arabic: 'جدولة مكالمة فيديو مع خبرائنا',
    hindi: 'हमारे विशेषज्ञों के साथ वीडियो कॉल का समय निर्धारित करें',
    dutch: 'Plan een videogesprek met onze experts',
    swedish: 'Schemalägg ett videosamtal med våra experter',
    norwegian: 'Planlegg en videosamtale med våre eksperter'
  },
  'liveChat': {
    english: 'Live Chat',
    spanish: 'Chat en Vivo',
    french: 'Chat en Direct',
    german: 'Live-Chat',
    italian: 'Chat dal Vivo',
    portuguese: 'Chat ao Vivo',
    chinese: '实时聊天',
    japanese: 'ライブチャット',
    korean: '실시간 채팅',
    russian: 'Живой чат',
    arabic: 'دردشة مباشرة',
    hindi: 'लाइव चैट',
    dutch: 'Live chat',
    swedish: 'Livechatt',
    norwegian: 'Live chat'
  },
  'instantAnswers': {
    english: 'Get instant answers to your questions',
    spanish: 'Obtén respuestas instantáneas a tus preguntas',
    french: 'Obtenez des réponses instantanées à vos questions',
    german: 'Erhalten Sie sofortige Antworten auf Ihre Fragen',
    italian: 'Ottieni risposte istantanee alle tue domande',
    portuguese: 'Obtenha respostas instantâneas às suas perguntas',
    chinese: '立即获得问题答案',
    japanese: '質問への即座の回答を取得',
    korean: '질문에 대한 즉각적인 답변 얻기',
    russian: 'Получите мгновенные ответы на ваши вопросы',
    arabic: 'احصل على إجابات فورية لأسئلتك',
    hindi: 'अपने प्रश्नों के तत्काल उत्तर प्राप्त करें',
    dutch: 'Krijg directe antwoorden op uw vragen',
    swedish: 'Få omedelbara svar på dina frågor',
    norwegian: 'Få umiddelbare svar på spørsmålene dine'
  },
  'feedback': {
    english: 'Feedback',
    spanish: 'Comentarios',
    french: 'Commentaires',
    german: 'Feedback',
    italian: 'Feedback',
    portuguese: 'Feedback',
    chinese: '反馈',
    japanese: 'フィードバック',
    korean: '피드백',
    russian: 'Отзыв',
    arabic: 'ملاحظات',
    hindi: 'प्रतिक्रिया',
    dutch: 'Feedback',
    swedish: 'Feedback',
    norwegian: 'Tilbakemelding'
  },
  'shareExperience': {
    english: 'Share your experience with us',
    spanish: 'Comparte tu experiencia con nosotros',
    french: 'Partagez votre expérience avec nous',
    german: 'Teilen Sie Ihre Erfahrungen mit uns',
    italian: 'Condividi la tua esperienza con noi',
    portuguese: 'Compartilhe sua experiência conosco',
    chinese: '与我们分享您的体验',
    japanese: 'あなたの体験を私たちと共有してください',
    korean: '당신의 경험을 우리와 공유하세요',
    russian: 'Поделитесь своим опытом с нами',
    arabic: 'شارك تجربتك معنا',
    hindi: 'हमारे साथ अपना अनुभव साझा करें',
    dutch: 'Deel uw ervaring met ons',
    swedish: 'Dela din upplevelse med oss',
    norwegian: 'Del din opplevelse med oss'
  },
  'language': {
    english: 'Language',
    spanish: 'Idioma',
    french: 'Langue',
    german: 'Sprache',
    italian: 'Lingua',
    portuguese: 'Idioma',
    chinese: '语言',
    japanese: '言語',
    korean: '언어',
    russian: 'Язык',
    arabic: 'اللغة',
    hindi: 'भाषा',
    dutch: 'Taal',
    swedish: 'Språk',
    norwegian: 'Språk'
  },
  'submit': {
    english: 'Submit',
    spanish: 'Enviar',
    french: 'Soumettre',
    german: 'Senden',
    italian: 'Invia',
    portuguese: 'Enviar',
    chinese: '提交',
    japanese: '送信',
    korean: '제출',
    russian: 'Отправить',
    arabic: 'إرسال',
    hindi: 'जमा करें',
    dutch: 'Indienen',
    swedish: 'Skicka',
    norwegian: 'Send inn'
  },
  'download': {
    english: 'Download',
    spanish: 'Descargar',
    french: 'Télécharger',
    german: 'Herunterladen',
    italian: 'Scarica',
    portuguese: 'Baixar',
    chinese: '下载',
    japanese: 'ダウンロード',
    korean: '다운로드',
    russian: 'Скачать',
    arabic: 'تحميل',
    hindi: 'डाउनलोड',
    dutch: 'Downloaden',
    swedish: 'Ladda ner',
    norwegian: 'Last ned'
  },
  'downloading': {
    english: 'Downloading...',
    spanish: 'Descargando...',
    french: 'Téléchargement...',
    german: 'Herunterladen...',
    italian: 'Scaricando...',
    portuguese: 'Baixando...',
    chinese: '下载中...',
    japanese: 'ダウンロード中...',
    korean: '다운로드 중...',
    russian: 'Загрузка...',
    arabic: 'جارٍ التحميل...',
    hindi: 'डाउनलोड हो रहा है...',
    dutch: 'Downloaden...',
    swedish: 'Laddar ner...',
    norwegian: 'Laster ned...'
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('english');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Translate the entire page content
    if (language !== 'english') {
      translatePageContent(language);
    }
  };

  const translatePageContent = async (targetLanguage: Language) => {
    try {
      // Show loading indicator
      document.body.style.cursor = 'wait';
      
      // Get all text elements on the page
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, button, a, label, input[placeholder], textarea[placeholder], div');
      
      // Batch translate text elements
      const elementsToTranslate: { element: Element; text: string }[] = [];
      
      for (const element of textElements) {
        const originalText = element.textContent || (element as HTMLInputElement).placeholder || '';
        if (originalText && originalText.trim() && originalText.length > 1) {
          // Skip elements that are already translated or contain only numbers/symbols
          if (!/^[\d\s\-+().,!?@#$%^&*]+$/.test(originalText)) {
            // Check if translation exists in our predefined translations
            const translationKey = Object.keys(translations).find(key => 
              translations[key].english.toLowerCase() === originalText.toLowerCase()
            );
            
            if (translationKey) {
              const translatedText = translations[translationKey][targetLanguage];
              if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                (element as HTMLInputElement).placeholder = translatedText;
              } else {
                element.textContent = translatedText;
              }
            } else {
              elementsToTranslate.push({ element, text: originalText });
            }
          }
        }
      }
      
      // Translate remaining elements using Google Translate API
      if (elementsToTranslate.length > 0) {
        // Process in batches to avoid overwhelming the API
        const batchSize = 10;
        for (let i = 0; i < elementsToTranslate.length; i += batchSize) {
          const batch = elementsToTranslate.slice(i, i + batchSize);
          
          await Promise.all(batch.map(async ({ element, text }) => {
            try {
              const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${getLanguageCode(targetLanguage)}&dt=t&q=${encodeURIComponent(text)}`);
              const data = await response.json();
              
              if (data && data[0] && data[0][0] && data[0][0][0]) {
                const translatedText = data[0][0][0];
                
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                  (element as HTMLInputElement).placeholder = translatedText;
                } else {
                  element.textContent = translatedText;
                }
              }
            } catch (error) {
              console.log('Translation error for text:', text, error);
            }
          }));
          
          // Add small delay between batches to avoid rate limiting
          if (i + batchSize < elementsToTranslate.length) {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        }
      }
      
      // Remove loading indicator
      document.body.style.cursor = 'default';
      
    } catch (error) {
      console.log('Page translation error:', error);
      document.body.style.cursor = 'default';
    }
  };

  const getLanguageCode = (language: Language): string => {
    const codes: { [key in Language]: string } = {
      english: 'en',
      spanish: 'es',
      french: 'fr',
      german: 'de',
      italian: 'it',
      portuguese: 'pt',
      chinese: 'zh',
      japanese: 'ja',
      korean: 'ko',
      russian: 'ru',
      arabic: 'ar',
      hindi: 'hi',
      dutch: 'nl',
      swedish: 'sv',
      norwegian: 'no'
    };
    return codes[language];
  };

  const t = (key: string): string => {
    return translations[key]?.[currentLanguage] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};