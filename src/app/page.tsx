"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function Home() {
  const [showAlternateHeader, setShowAlternateHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowAlternateHeader(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="h-screen flex-col items-center justify-items-center mt-40">
      {/* Header Principal */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: showAlternateHeader ? 0 : 1, y: showAlternateHeader ? -50 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header />
      </motion.div>

      {/* Header Alternativo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: showAlternateHeader ? 1 : 0, y: showAlternateHeader ? 0 : -50 }}
        transition={{ duration: 0.3 }}
        className="shadow-lg"
      >
        <div className="mt-20 border-solid border-2 border-gray-200">
          <h1>Conteúdo principal</h1>
          <p>Role para baixo para ver o efeito.</p>
        </div>
      </motion.div>
    </div>
  );
}
