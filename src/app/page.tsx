"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Forms from "@/components/Forms";
import Footer from "@/components/Footer";

export default function Home() {
  const [showAlternateHeader, setShowAlternateHeader] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowAlternateHeader(true);
      } else {
        setShowAlternateHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-full w-full bg-gradient-to-b from-[#066360] to-[#69B4B1]">
      {/* -- Header (ocupa a tela toda e some quando scroll > metade da tela) -- */}
      <motion.div
        className="sticky top-0 h-screen flex items-center justify-center relative pointer-events-none"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: showAlternateHeader ? 0 : 1,
          y: showAlternateHeader ? -50 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Header />

        {!showAlternateHeader && (
          <motion.div
            className="absolute bottom-10 flex flex-col items-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            {/* Ícone de setinha pulando */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        )}
      </motion.div>

      {/* -- Forms (ocupa ao menos a altura de uma tela) -- */}
      <motion.div
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: showAlternateHeader ? 1 : 0,
          y: showAlternateHeader ? 0 : -50,
        }}
        transition={{ duration: 0.3 }}
      >
        <Forms />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
