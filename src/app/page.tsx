"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Forms from "@/components/Forms";

export default function Home() {
  const [showAlternateHeader, setShowAlternateHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ao passar da metade da altura do viewport, trocamos para o conteúdo.
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
    // 200vh para haver espaço de sobra para rolagem e ativar a transição
    <div className="h-[200vh] w-full">
      {/* SECTION HEADER */}
      <motion.div
        // sticky + top-0 mantém este bloco ocupando a tela ao rolar
        className="sticky top-0 h-screen flex items-center justify-center relative"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: showAlternateHeader ? 0 : 1,
          y: showAlternateHeader ? -50 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Header />

        {/* SETA ANIMADA - aparece só enquanto o Header está visível */}
        {!showAlternateHeader && (
          <motion.div
            className="absolute bottom-10 flex flex-col items-center"
            initial={{ opacity: 1 }}
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
          >
            {/* Você pode trocar esse SVG por outro ícone de seta de sua preferência */}
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

      {/* SECTION CONTEÚDO PRINCIPAL */}
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
    </div>
  );
}
