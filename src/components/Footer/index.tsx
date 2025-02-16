import React from 'react';
import Icon from "@/components/Icon/Icon";

export default function Footer() {
  return (
    <>
      <div className="flex h-20 justify-center space-x-4">
        {/* Botão Facebook */}
        <a
          href="https://www.facebook.com/GOgabiacademiapersonalizada/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-[#70bebc] rounded-md
        hover:bg-teal-800 transition-colors"
        >
          <Icon name="Facebook" />
        </a>

        {/* Botão Instagram */}
        <a
          href="https://www.instagram.com/gogabiacademiapersonalizada?igsh=MWJqaWVlY21tc3Bmag%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-[#70bebc]  rounded-md
        hover:bg-teal-800 transition-colors"
        >
          <Icon name="Instagram" />
        </a>

      </div>
      <div className="h-20 flex items-center justify-center">
        <p className="text-white text-center">© 2025 GoGabi</p>
      </div>
    </>
  );
}
