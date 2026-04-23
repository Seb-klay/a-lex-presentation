"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Translations
const translations = {
  fr: {
    hero: {
      title1: "IA de nouvelle génération",
      title2: "pour experts juridiques suisses",
      description: "Conversations IA sécurisées, privées et de pointe, hébergées entièrement en Suisse.",
      getStarted: "Commencer",
      login: "Se connecter"
    },
    quickIntro: {
      title: "Intelligent, Sécurisé, Suisse",
      feature1: {
        title: "Chattez avec plusieurs modèles d'IA",
        description: "Interagissez facilement avec plusieurs modèles d'IA leaders dans une interface unifiée. Comparez les réponses, changez de contexte et obtenez les meilleures réponses d'un large éventail d'intelligences artificielles."
      },
      feature2: {
        title: "Cas d'usage sur le droit suisse",
        description: "Assistance IA spécialisée pour les cadres juridiques suisses. Obtenez des réponses précises et contextuelles pour la conformité, les réglementations et la recherche juridique — adaptée spécifiquement au marché suisse.",
        badge: "Bientôt disponible"
      },
      feature3: {
        title: "Chat sécurisé — rien ne quitte le cloud suisse",
        description: "Vos conversations ne quittent jamais la Suisse. Entièrement hébergé sur l'infrastructure suisse, vos données restent protégées par les lois sur la vie privée les plus strictes. Aucun traitement externe, aucun transfert de données transfrontalier — souveraineté totale sur vos informations."
      }
    },
    features: {
      title: "Sécurité & Contrôle",
      ai: {
        title: "IA",
        items: ["Sécurité IA", "Gouvernance IA", "Monitoring IA"]
      },
      dataPrivacy: {
        title: "Confidentialité",
        items: ["Conforme LPD / RGPD"]
      },
      infrastructure: {
        title: "Infrastructure",
        items: ["Infomaniak (Cloud Suisse Certifié)"]
      },
      endpointSecurity: {
        title: "Sécurité des points d'accès",
        items: ["Monitoring temps réel", "Chiffrement de bout en bout"]
      },
      dataSecurity: {
        title: "Sécurité des données",
        items: ["Sauvegardes", "Effacement des données", "Chiffrement au repos"],
        badge: "Bientôt disponible"
      },
      incidentResponse: {
        title: "Réponse aux incidents",
        items: ["Utilisateur informé pour toute préoccupation de sécurité"]
      }
    },
    footer: {
      contact: "Contact",
      email: "sebklay@hotmail.com",
      address: "Adresse",
      addressLine1: "rue Emer-de-Vattel 44",
      addressLine2: "2000 Neuchâtel, Suisse",
      legal: "Juridique",
      rights: "Tous droits réservés.",
      swissLine: "Hébergé en Suisse · Conforme suisse · Vos données"
    }
  },
  en: {
    hero: {
      title1: "Next-Gen AI",
      title2: "for Swiss Legal Experts",
      description: "Secure, private, and cutting-edge AI conversations hosted entirely in Switzerland.",
      getStarted: "Get Started",
      login: "Log in"
    },
    quickIntro: {
      title: "Intelligent, Secure, Swiss",
      feature1: {
        title: "Chat with several AI models",
        description: "Seamlessly interact with multiple leading AI models in one unified interface. Compare responses, switch contexts, and get the best answers from a diverse range of AI intelligences."
      },
      feature2: {
        title: "Answer use case about Swiss law",
        description: "Specialized AI assistance for Swiss legal frameworks. Get precise, context-aware answers for compliance, regulations, and legal research — tailored specifically for the Swiss market.",
        badge: "Coming Soon"
      },
      feature3: {
        title: "Safe chat — nothing leaves the Swiss cloud",
        description: "Your conversations never leave Switzerland. Hosted entirely on Swiss infrastructure, your data remains protected under the strictest privacy laws. No external processing, no cross-border data transfers — complete sovereignty over your information."
      }
    },
    features: {
      title: "Security & Control",
      ai: {
        title: "AI",
        items: ["AI Security", "AI Governance", "AI Monitoring"]
      },
      dataPrivacy: {
        title: "Data Privacy",
        items: ["LPD / RGPD Compliant"]
      },
      infrastructure: {
        title: "Infrastructure",
        items: ["Infomaniak (Swiss Cloud Certified)"]
      },
      endpointSecurity: {
        title: "Endpoint Security",
        items: ["Monitoring Real-time", "End-to-End Encryption"]
      },
      dataSecurity: {
        title: "Data Security",
        items: ["Data Backups", "Data Erasure", "Encryption at Rest"],
        badge: "Coming Soon"
      },
      incidentResponse: {
        title: "Incident response",
        items: ["User informed for any security concern"]
      }
    },
    footer: {
      contact: "Contact",
      email: "sebklay@hotmail.com",
      address: "Address",
      addressLine1: "rue Emer-de-Vattel 44",
      addressLine2: "2000 Neuchâtel, Switzerland",
      legal: "Legal",
      rights: "All rights reserved.",
      swissLine: "Swiss hosted · Swiss compliant · Your data"
    }
  },
  de: {
    hero: {
      title1: "Next-Gen KI",
      title2: "für Schweizer Rechtsexperten",
      description: "Sichere, private und hochmoderne KI-Gespräche, vollständig in der Schweiz gehostet.",
      getStarted: "Loslegen",
      login: "Anmelden"
    },
    quickIntro: {
      title: "Intelligent, Sicher, Schweizerisch",
      feature1: {
        title: "Chatten Sie mit mehreren KI-Modellen",
        description: "Interagieren Sie nahtlos mit mehreren führenden KI-Modellen in einer einheitlichen Oberfläche. Vergleichen Sie Antworten, wechseln Sie Kontexte und erhalten Sie die besten Antworten von einer vielfältigen Palette von KI-Intelligenzen."
      },
      feature2: {
        title: "Anwendungsfall für Schweizer Recht",
        description: "Spezialisierte KI-Unterstützung für schweizerische Rechtsrahmen. Erhalten Sie präzise, kontextbewusste Antworten für Compliance, Vorschriften und Rechtsrecherche — speziell auf den Schweizer Markt zugeschnitten.",
        badge: "Demnächst verfügbar"
      },
      feature3: {
        title: "Sicherer Chat — nichts verlässt die Schweizer Cloud",
        description: "Ihre Gespräche verlassen nie die Schweiz. Vollständig auf Schweizer Infrastruktur gehostet, bleiben Ihre Daten nach den strengsten Datenschutzgesetzen geschützt. Keine externe Verarbeitung, keine grenzüberschreitenden Datenübertragungen — vollständige Souveränität über Ihre Informationen."
      }
    },
    features: {
      title: "Sicherheit & Kontrolle",
      ai: {
        title: "KI",
        items: ["KI-Sicherheit", "KI-Governance", "KI-Überwachung"]
      },
      dataPrivacy: {
        title: "Datenschutz",
        items: ["DSGVO / BÜNDNIS Konform"]
      },
      infrastructure: {
        title: "Infrastruktur",
        items: ["Infomaniak (Schweizer Cloud zertifiziert)"]
      },
      endpointSecurity: {
        title: "Endpunktsicherheit",
        items: ["Echtzeit-Überwachung", "Ende-zu-Ende-Verschlüsselung"]
      },
      dataSecurity: {
        title: "Datensicherheit",
        items: ["Datensicherungen", "Datenlöschung", "Verschlüsselung im Ruhezustand"],
        badge: "Demnächst verfügbar"
      },
      incidentResponse: {
        title: "Vorfallreaktion",
        items: ["Benutzer wird bei Sicherheitsbedenken informiert"]
      }
    },
    footer: {
      contact: "Kontakt",
      email: "sebklay@hotmail.com",
      address: "Adresse",
      addressLine1: "rue Emer-de-Vattel 44",
      addressLine2: "2000 Neuchâtel, Schweiz",
      legal: "Rechtliches",
      rights: "Alle Rechte vorbehalten.",
      swissLine: "Schweizer gehostet · Schweizer konform · Ihre Daten"
    }
  }
};

type Language =  "fr" | "en" | "de";

export default function Home() {
  const [language, setLanguage] = useState<Language>("fr");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const t = translations[language];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
      observerRef.current?.disconnect();
    };
  }, [language]); // Re-run when language changes to re-animate

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#e5e7eb" }}>
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur-md rounded-full p-1 shadow-lg">
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            language === "en"
              ? "bg-gray-700 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage("fr")}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            language === "fr"
              ? "bg-gray-700 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          FR
        </button>
        <button
          onClick={() => changeLanguage("de")}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            language === "de"
              ? "bg-gray-700 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          DE
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center z-10 animate-on-scroll">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: "#4a5568" }}
          >
            {t.hero.title1} <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-700 to-gray-500">
              {t.hero.title2}
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#718096" }}
          >
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chat.a-lex.app/signup"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#4a5568", color: "white" }}
            >
              {t.hero.getStarted}
            </Link>
            <Link
              href="https://chat.a-lex.app/login"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-md border hover:bg-white/20"
              style={{ borderColor: "#4a5568", color: "#4a5568" }}
            >
              {t.hero.login}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div
            className="w-6 h-10 border-2 rounded-full flex justify-center"
            style={{ borderColor: "#4a5568" }}
          >
            <div
              className="w-1 h-2 rounded-full mt-2 animate-pulse"
              style={{ backgroundColor: "#4a5568" }}
            />
          </div>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-24 px-4" style={{ backgroundColor: "#cbd5e1" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll"
            style={{ color: "#4a5568" }}
          >
            {t.quickIntro.title}
          </h2>
          <div className="space-y-12">
            {/* Item 1 */}
            <div>
              <div className="overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 animate-on-scroll"
                  style={{ color: "#4a5568" }}
                >
                  {t.quickIntro.feature1.title}
                </h3>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-lg leading-relaxed animate-on-scroll"
                  style={{ color: "#718096" }}
                >
                  {t.quickIntro.feature1.description}
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div>
              <div className="overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3 flex-wrap animate-on-scroll"
                  style={{ color: "#4a5568" }}
                >
                  {t.quickIntro.feature2.title}
                  <span
                    className="text-sm px-3 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: "rgba(219, 234, 254, 0.8)",
                      color: "#4a5568",
                    }}
                  >
                    {t.quickIntro.feature2.badge}
                  </span>
                </h3>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-lg leading-relaxed animate-on-scroll"
                  style={{ color: "#718096" }}
                >
                  {t.quickIntro.feature2.description}
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div>
              <div className="overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 animate-on-scroll"
                  style={{ color: "#4a5568" }}
                >
                  {t.quickIntro.feature3.title}
                </h3>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-lg leading-relaxed animate-on-scroll"
                  style={{ color: "#718096" }}
                >
                  {t.quickIntro.feature3.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 px-4" style={{ backgroundColor: "#e5e7eb" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll"
            style={{ color: "#4a5568" }}
          >
            {t.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title={t.features.ai.title}
              items={t.features.ai.items}
              delay={0}
            />
            <FeatureCard
              title={t.features.dataPrivacy.title}
              items={t.features.dataPrivacy.items}
              delay={1}
            />
            <FeatureCard
              title={t.features.infrastructure.title}
              items={t.features.infrastructure.items}
              delay={2}
            />
            <FeatureCard
              title={t.features.endpointSecurity.title}
              items={t.features.endpointSecurity.items}
              delay={3}
            />
            <FeatureCard
              title={t.features.dataSecurity.title}
              items={t.features.dataSecurity.items}
              delay={4}
              badge={t.features.dataSecurity.badge}
            />
            <FeatureCard
              title={t.features.incidentResponse.title}
              items={t.features.incidentResponse.items}
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-4 border-t"
        style={{ backgroundColor: "#cbd5e1", borderColor: "#e5e7eb" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold mb-3" style={{ color: "#4a5568" }}>
              {t.footer.contact}
            </h4>
            <p style={{ color: "#718096" }}>{t.footer.email}</p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: "#4a5568" }}>
              {t.footer.address}
            </h4>
            <p style={{ color: "#718096" }}>
              {t.footer.addressLine1}
              <br />
              {t.footer.addressLine2}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: "#4a5568" }}>
              {t.footer.legal}
            </h4>
            <p style={{ color: "#718096" }}>
              © {new Date().getFullYear()}
              <br />
              {t.footer.rights}
            </p>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto text-center pt-8 mt-8 border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          <p style={{ color: "#718096" }}>
            {t.footer.swissLine}
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateX(-30px);
          transition:
            opacity 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1),
            transform 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        .grid .animate-on-scroll:nth-child(even) {
          transform: translateX(30px);
        }
        .grid .animate-on-scroll:nth-child(even).animate-in {
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}

function FeatureCard({
  title,
  items,
  delay,
  badge,
}: {
  title: string;
  items: string[];
  delay: number;
  badge?: string;
}) {
  return (
    <div
      className="animate-on-scroll backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold" style={{ color: "#4a5568" }}>
          {title}
        </h3>
        {badge && (
          <span
            className="text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2"
            style={{
              backgroundColor: "rgba(219, 234, 254, 0.8)",
              color: "#4a5568",
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2"
            style={{ color: "#718096" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#4a5568" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}