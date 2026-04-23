"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#e5e7eb" }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto text-center z-10 animate-on-scroll">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: "#4a5568" }}
          >
            Next-Gen AI <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-700 to-gray-500">
              for Swiss Legal Experts
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            style={{ color: "#718096" }}
          >
            Secure, private, and cutting-edge AI conversations hosted entirely
            in Switzerland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chat.a-lex.app/signup"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#4a5568", color: "white" }}
            >
              Get Started
            </Link>
            <Link
              href="https://chat.a-lex.app/signin"
              className="px-8 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-md border hover:bg-white/20"
              style={{ borderColor: "#4a5568", color: "#4a5568" }}
            >
              Sign In
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

      {/* Quick Intro Section - Progressive List Layout */}
      <section className="py-24 px-4" style={{ backgroundColor: "#cbd5e1" }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll"
            style={{ color: "#4a5568" }}
          >
            Intelligent, Secure, Swiss
          </h2>
          <div className="space-y-12">
            {/* Item 1 - Multi-Model AI Chat */}
            <div>
              <div className="overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 animate-on-scroll"
                  style={{ color: "#4a5568" }}
                >
                  Chat with several AI models
                </h3>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-lg leading-relaxed animate-on-scroll"
                  style={{ color: "#718096" }}
                >
                  Seamlessly interact with multiple leading AI models in one
                  unified interface. Compare responses, switch contexts, and get
                  the best answers from a diverse range of AI intelligences.
                </p>
              </div>
            </div>

            {/* Item 2 - Swiss Law Assistant */}
            <div>
              <div className="overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3 flex-wrap animate-on-scroll"
                  style={{ color: "#4a5568" }}
                >
                  Answer use case about Swiss law
                  <span
                    className="text-sm px-3 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: "rgba(219, 234, 254, 0.8)",
                      color: "#4a5568",
                    }}
                  >
                    Coming Soon
                  </span>
                </h3>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-lg leading-relaxed animate-on-scroll"
                  style={{ color: "#718096" }}
                >
                  Specialized AI assistance for Swiss legal frameworks. Get
                  precise, context-aware answers for compliance, regulations,
                  and legal research — tailored specifically for the Swiss
                  market.
                </p>
              </div>
            </div>

            {/* Item 3 - Safe Chat */}
            <div>
              <div className="overflow-hidden">
                <h3
                  className="text-2xl md:text-3xl font-bold mb-3 animate-on-scroll"
                  style={{ color: "#4a5568" }}
                >
                  Safe chat — nothing leaves the Swiss cloud
                </h3>
              </div>
              <div className="overflow-hidden">
                <p
                  className="text-lg leading-relaxed animate-on-scroll"
                  style={{ color: "#718096" }}
                >
                  Your conversations never leave Switzerland. Hosted entirely on
                  Swiss infrastructure, your data remains protected under the
                  strictest privacy laws. No external processing, no
                  cross-border data transfers — complete sovereignty over your
                  information.
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
            Security & Control
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI */}
            <FeatureCard
              title="AI"
              items={["AI Security", "AI Governance", "AI Monitoring"]}
              delay={0}
            />
            {/* Data Privacy */}
            <FeatureCard
              title="Data Privacy"
              items={["LPD / RGPD Compliant"]}
              delay={1}
            />
            {/* Infrastructure */}
            <FeatureCard
              title="Infrastructure"
              items={["Infomaniak (Swiss Cloud Certified)"]}
              delay={2}
            />
            {/* Endpoint Security */}
            <FeatureCard
              title="Endpoint Security"
              items={["Monitoring Real-time", "End-to-End Encryption"]}
              delay={3}
            />
            {/* Data Security */}
            <FeatureCard
              title="Data Security"
              items={["Data Backups", "Data Erasure", "Encryption at Rest"]}
              delay={4}
              badge="Coming Soon"
            />
            {/* Placeholder for visual balance */}
            <FeatureCard
              title="Incident response"
              items={["User informed for any security concern"]}
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
              Contact
            </h4>
            <p style={{ color: "#718096" }}>sebklay@hotmail.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: "#4a5568" }}>
              Address
            </h4>
            <p style={{ color: "#718096" }}>
              rue Emer-de-Vattel 44
              <br />
              2000 Neuchâtel, Switzerland
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3" style={{ color: "#4a5568" }}>
              Legal
            </h4>
            <p style={{ color: "#718096" }}>
              © {new Date().getFullYear()}
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto text-center pt-8 mt-8 border-t"
          style={{ borderColor: "#e5e7eb" }}
        >
          <p style={{ color: "#718096" }}>
            Swiss hosted · Swiss compliant · Your data
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
        /* Alternate direction for even children inside grids for more dynamic effect */
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
            className="text-xs px-2 py-1 rounded-full"
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
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#4a5568" }}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
